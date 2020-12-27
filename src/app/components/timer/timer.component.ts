import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { multiplier } from '../../../utils/number';
import { extract } from '../../../utils/object';
import { toFraction, toTime } from '../../../utils/string';
import { getHex } from '../../../utils/style';
import { Timer, TimerAction } from '../../../services/timer';
import { Sounds } from 'src/services/sounds';
import { noSleep } from 'src/services/nosleep';
import { Workout } from 'src/app/components/workout-creator/workout-creator.component';
import { Exercice } from '../exercice-creator/exercice-creator.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit {

  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  @Input() back: () => void;
  @Input() workout: Workout;

  private readonly precision = 50;

  private timer: Timer;
  private currentDuration: number;
  private totalIntervals: number;
  private totalTime: number;
  private currentInterval: number;
  private currentSet: number;

  public exercice: Exercice;
  public currentExerciceIndex: number;
  public totalSets = 1;
  public remaining = '00:00';
  public elapsed = '00:00';
  public time = '00:00';
  public state: 'paused' | 'active' = 'active';
  public percent: number;
  public currentElement: 'prepare' | 'work' | 'rest' | 'restSets'| 'finish' | 'exerciceRest';
  public intervals = '00/00';
  public sets = '00/00';

  public get color() {
    if (this.currentElement === 'work') {
      return 'danger';
    }

    if (this.currentElement === 'rest') {
      return 'primary';
    }

    if (this.currentElement === 'restSets') {
      return 'secondary';
    }

    if (this.currentElement === 'exerciceRest') {
      return 'tertiary';
    }

    if (this.currentElement === 'finish') {
      return 'tertiary';
    }

    return 'success';
  }

  public get hexColor() {
    return getHex(this.color);
  }

  public get elementTitle() {
    switch (this.currentElement) {
      case 'restSets':
        return 'Rest Set';

      case 'exerciceRest':
        return 'Exercice Rest';

      default:
        return this.currentElement;
    }
  }

  async ngOnInit() {
    await this.init();
  }

  goBack() {
    noSleep.disable();
    this.timer?.stop();
    this.back();
  }

  toggle() {
    if (this.state === 'active') { this.pause(); }
    else { this.resume(); }
  }

  pause() {
    this.timer.pause();
    this.state = 'paused';
  }

  resume() {
    this.timer.resume();
    this.state = 'active';
  }

  next() {
    this.timer.next();
  }

  previous() {
    this.timer.back();
    if (this.state === 'paused') { this.timer.pause(); }
  }

  private async init()
  {
    await noSleep.enable();

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.workout.exercices.length; i++)
    {
      try { await this.doTimerWork(i); }
      catch { return; }
    }

    this.currentElement = 'finish';
    this.changeDetectorRef.detectChanges();
  }

  private async doTimerWork(i: number) {
    this.currentExerciceIndex = i;
    const exercice = this.workout.exercices[i];
    this.initTimer(this.workout.exercices[i]);
    await this.run(exercice);

    if (i !== this.workout.exercices.length - 1)
    {
      await this.startExerciceRest(exercice);
    }
  }

  private initTimer(exercice: Exercice)
  {
    this.exercice = exercice;
    this.createTimer();

    const [, , , cycles, sets] = exercice.elements.map(extract('value'));
    this.totalIntervals = cycles;
    this.currentInterval = 1;
    this.totalSets = sets;
    this.currentSet = 1;
    this.totalTime = this.exercice.totalTime;
  }

  private async run(exercice: Exercice) {
    const values = exercice.elements.map(extract('value'));
    const [prepare, work, rest, , , restSets] = values.map(multiplier(1000));
    const [, , , cycles, sets] = values;

    await this.start([prepare, work, rest, cycles, sets, restSets]);
    Sounds.play('boxing-bell');
  }

  private async start([prepare, work, rest, cycles, sets, restSets]: number[])
  {
    await this.set(prepare, 'prepare');

    for (let set = 1; set <= sets; set++)
    {
      this.currentInterval = 1;

      for (let cycle = 1; cycle <= cycles; cycle++)
      {
        Sounds.play('whistle');
        await this.set(work, 'work');

        if (cycle < cycles)
        {
          Sounds.play('ding-sound');
          await this.set(rest, 'rest');
          this.currentInterval++;
        }
      }

      if (set < sets)
      {
        Sounds.play('ding-sound');
        await this.set(restSets, 'restSets');
      }

      this.currentSet++;
    }
  }

  private async startExerciceRest(exercice: Exercice) {
    const values = exercice.elements.map(extract('value'));
    const [, , , , , , exerciceRest] = values.map(multiplier(1000));
    this.totalTime = exerciceRest;
    this.createTimer();

    await this.set(exerciceRest, 'exerciceRest');
  }

  private createTimer() {
    this.timer = new Timer(this.precision);
    this.timer.on([3000, 2000, 1000], () => Sounds.play('short-beep'));
    this.timer.subscribe(time => this.update(time));
  }

  private async set(time: number, type: 'prepare' | 'work' | 'rest' | 'restSets' | 'exerciceRest') {
    if (time <= 0) { return; }

    this.currentDuration = time / 1000;
    this.currentElement = type;
    const timerPromise = this.timer.start(time);

    if (this.state === 'paused') { this.timer.pause(); }

    await timerPromise;
  }

  private update(time: TimerAction) {
    const remainingTime = (this.totalTime / 1000) - time.totalElapsed;
    this.intervals = toFraction(this.currentInterval, this.totalIntervals);
    this.sets = toFraction(this.currentSet, this.totalSets);
    this.elapsed = toTime(Math.floor(time.totalElapsed));
    this.remaining = toTime(Math.ceil(remainingTime));
    this.time = toTime(Math.ceil(time.remaining));
    this.percent = (time.remaining / this.currentDuration) * 100;
    this.changeDetectorRef.detectChanges();
  }

}
