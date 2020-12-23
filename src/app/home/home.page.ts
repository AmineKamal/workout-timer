import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Sounds } from 'src/utils/sounds';
import { extract } from '../../utils/object';
import { pad, toTime } from '../../utils/string';
import { TimerComponent } from '../timer/timer.component';

export interface WorkoutSettingElement {
  title: string;
  value: number;
  icon: string;
  unit?: string;
}

export interface Exercice {
  name: string;
  elements: WorkoutSettingElement[];
  totalTime: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {
  public readonly elements: WorkoutSettingElement[] =
  [
    { title: 'Prepare', value: 10, icon: 'accessibility-outline', unit: 's' },
    { title: 'Work', value: 20, icon: 'barbell-outline', unit: 's' },
    { title: 'Rest', value: 10, icon: 'bed-outline', unit: 's' },
    { title: 'Cycles', value: 8, icon: 'sync-outline' },
    { title: 'Sets', value: 1, icon: 'repeat-outline' },
    { title: 'Rest Between Sets', value: 10, icon: 'time-outline', unit: 's' }
  ];

  private totalTime: number;
  public time = '04:00';
  public intervals = 16;

  constructor(
    public modalController: ModalController,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    Sounds.load();
    this.update();
  }

  incrementValue(index: number) {
    this.elements[index].value++;
    this.update();
  }

  decrementValue(index: number) {
    if (this.elements[index].value === 0) { return; }
    this.elements[index].value--;
    this.update();
  }

  async start() {
    const modal = await this.modalController.create({
      component: TimerComponent,
      componentProps: {
        back: async () => await modal.dismiss(),
        exercice: this.createExercice()
      }
    });

    return await modal.present();
  }

  private createExercice(): Exercice {
    return {
      name: 'Exercice',
      elements: this.elements,
      totalTime: this.totalTime * 1000
    };
  }

  private update() {
    const [prepare, work, rest, cycles, sets, restSets] = this.elements.map(extract('value'));
    this.totalTime = work * cycles;
    this.totalTime += rest * (cycles - 1);
    this.totalTime *= sets;
    this.totalTime += restSets * (sets - 1);
    this.totalTime += prepare;

    this.time = toTime(this.totalTime);
    this.intervals = cycles * sets;
    this.changeDetectorRef.detectChanges();
  }
}
