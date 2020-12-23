import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TimerComponent } from 'src/app/components/timer/timer.component';
import { extract } from 'src/utils/object';
import { toTime } from 'src/utils/string';

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
  selector: 'app-exercice-creator',
  templateUrl: './exercice-creator.component.html',
  styleUrls: ['./exercice-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciceCreatorComponent implements OnInit {
  @Output() action = new EventEmitter<Exercice>();
  @Input() actionName: string;

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
  public exerciceName = 'Workout';

  constructor(
    public modalController: ModalController,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
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

  public start() {
    return this.action.emit(this.createExercice());
  }

  private createExercice(): Exercice {
    return {
      name: this.exerciceName,
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
