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
import { Timer } from '../../../services/timer';
import { Exercice } from '../exercice-creator/exercice-creator.component';
import { Sounds } from 'src/services/sounds';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit {

  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  @Input() back: () => void;
  @Input() exercice: Exercice;

  private readonly precision = 50;

  private timer: Timer;
  private currentDuration: number;
  private elapsedTime: number;
  private remainingTime: number;
  private totalIntervals: number;
  private currentInterval: number;
  private currentSet: number;

  public totalSets = 1;
  public remaining = '00:00';
  public elapsed = '00:00';
  public time = '00:00';
  public state: 'paused' | 'active' = 'active';
  public percent: number;
  public currentElement: 'prepare' | 'work' | 'rest' | 'restSets'| 'finish';
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

    if (this.currentElement === 'finish') {
      return 'tertiary';
    }

    return 'success';
  }

  public get hexColor() {
    return getHex(this.color);
  }

  public get elementTitle() {
    return this.currentElement === 'restSets' ? 'Rest Set' : this.currentElement;
  }

  async ngOnInit() {
    this.initTimer();
    await this.run();

    this.currentElement = 'finish';
    this.changeDetectorRef.detectChanges();
  }

  goBack() {
    this.timer.stop();
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

  private initTimer()
  {
    this.elapsedTime = 0;
    this.remainingTime = this.exercice.totalTime;

    this.timer = new Timer(this.precision);
    this.timer.on([3000, 2000, 1000], () => Sounds.play('beep'));
    this.timer.subscribe(time => this.update(time));

    const [, , , cycles, sets] = this.exercice.elements.map(extract('value'));
    this.totalIntervals = cycles;
    this.currentInterval = 1;
    this.totalSets = sets;
    this.currentSet = 1;
  }

  private async run() {
    const values = this.exercice.elements.map(extract('value'));
    const [prepare, work, rest, , , restSets] = values.map(multiplier(1000));
    const [, , , cycles, sets] = values;

    try { await this.start([prepare, work, rest, cycles, sets, restSets]); }
    catch { return; }

    Sounds.play('boxingSound');
  }

  private async start([prepare, work, rest, cycles, sets, restSets]: number[])
  {
    await this.set(prepare, 'prepare');

    for (let set = 1; set <= sets; set++)
    {
      for (let cycle = 1; cycle <= cycles; cycle++)
      {
        Sounds.play('whistle');
        await this.set(work, 'work');

        if (cycle < cycles)
        {
          Sounds.play('ding');
          await this.set(rest, 'rest');
          this.currentInterval++;
        }
      }

      if (set < sets)
      {
        Sounds.play('ding');
        await this.set(restSets, 'restSets');
      }

      this.currentInterval = 1;
      this.currentSet++;
    }
  }

  private async set(time: number, type: 'prepare' | 'work' | 'rest' | 'restSets') {
    if (time <= 0) { return; }

    this.currentDuration = time / 1000;
    this.currentElement = type;
    await this.timer.start(time);
  }

  private update(time: number) {
    this.elapsedTime += this.precision;
    this.remainingTime -= this.precision;
    this.intervals = toFraction(this.currentInterval, this.totalIntervals);
    this.sets = toFraction(this.currentSet, this.totalSets);
    this.elapsed = toTime(Math.floor(this.elapsedTime / 1000));
    this.remaining = toTime(Math.ceil(this.remainingTime / 1000));
    this.time = toTime(Math.ceil(time));
    this.percent = (time / this.currentDuration) * 100;
    this.changeDetectorRef.detectChanges();
  }
}
