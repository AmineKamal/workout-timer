import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { multiplier } from '../../utils/number';
import { extract } from '../../utils/object';
import { toFraction, toTime } from '../../utils/string';
import { getHex } from '../../utils/style';
import { Timer } from '../../utils/timer';
import { Exercice } from '../home/home.page';
import { Howl } from 'howler';
import { Sounds } from 'src/utils/sounds';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit {
  @Input() back: () => void;
  @Input() exercice: Exercice;

  private readonly precision = 50;

  private timer: Timer;
  private currentDuration: number;
  private elapsedTime: number;
  private remainingTime: number;
  private totalIntervals: number;
  private currentInterval: number;

  public remaining = '00:00';
  public elapsed = '00:00';
  public time = '00:00';
  public state: 'paused' | 'active' = 'active';
  public percent: number;
  public currentElement: 'prepare' | 'work' | 'rest' | 'finish';
  public intervals = '00/00';

  public get color() {
    if (this.currentElement === 'work') {
      return 'danger';
    }

    if (this.currentElement === 'rest') {
      return 'primary';
    }

    if (this.currentElement === 'finish') {
      return 'tertiary';
    }

    return 'success';
  }

  public get hexColor() {
    return getHex(this.color);
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  async ngOnInit() {
    this.elapsedTime = 0;
    this.remainingTime = this.exercice.totalTime;
    this.timer = new Timer(this.precision);
    this.timer.on([3000, 2000, 1000], () => Sounds.beep.play());
    this.timer.subscribe(time => this.update(time));

    const [, , , cycles] = this.exercice.elements.map(extract('value'));
    this.totalIntervals = cycles;
    this.currentInterval = 1;

    await this.start();
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

  private async start() {
    const [prepare, work, rest] = this.exercice.elements
      .map(extract('value'))
      .map(multiplier(1000));

    const [, , , cycles] = this.exercice.elements.map(extract('value'));

    try {
      await this.set(prepare, 'prepare');
      for (let i = 0; i < cycles; i++) {
        Sounds.whistle.play();
        await this.set(work, 'work');
        if (i < cycles - 1)
        {
          Sounds.ding.play();
          await this.set(rest, 'rest');
        }
      }
    } catch {}

    Sounds.boxingSound.play();
  }

  private async set(time: number, type: 'prepare' | 'work' | 'rest') {
    this.currentDuration = time / 1000;
    this.currentElement = type;
    await this.timer.start(time);

    if (type === 'work') { this.currentInterval++; }
  }

  private update(time: number) {
    this.elapsedTime += this.precision;
    this.remainingTime -= this.precision;
    this.intervals = toFraction(this.currentInterval, this.totalIntervals);
    this.elapsed = toTime(Math.round(this.elapsedTime / 1000));
    this.remaining = toTime(Math.round(this.remainingTime / 1000));
    this.time = toTime(Math.round(time));
    this.percent = (time / this.currentDuration) * 100;
    this.changeDetectorRef.detectChanges();
  }
}
