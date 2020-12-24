import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { clone, extract } from 'src/utils/object';
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

const defaultSettings: WorkoutSettingElement[] =
[
  { title: 'Prepare', value: 10, icon: 'accessibility-outline', unit: 's' },
  { title: 'Work', value: 20, icon: 'barbell-outline', unit: 's' },
  { title: 'Rest', value: 10, icon: 'time-outline', unit: 's' },
  { title: 'Cycles', value: 8, icon: 'sync-outline' },
  { title: 'Sets', value: 1, icon: 'repeat-outline' },
  { title: 'Rest Between Sets', value: 10, icon: 'time-outline', unit: 's' },
  { title: 'Post Exercice Rest', value: 60, icon: 'bed-outline', unit: 's' },
];

@Component({
  selector: 'app-exercice-creator',
  templateUrl: './exercice-creator.component.html',
  styleUrls: ['./exercice-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExerciceCreatorComponent implements OnInit {
  @Input() action: (input: Exercice) => void;
  @Input() actionName: string;
  @Input() back: () => void;

  public elements: WorkoutSettingElement[] = clone(defaultSettings);
  public time = '04:00';
  public intervals = 16;
  public exerciceName = '';

  private totalTime: number;

  public constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public ngOnInit() {
    this.update();
  }

  public incrementValue(index: number) {
    this.elements[index].value++;
    this.update();
  }

  public decrementValue(index: number) {
    if (this.elements[index].value === 0) { return; }
    this.elements[index].value--;
    this.update();
  }

  public resetDefaults() {
    this.elements = clone(defaultSettings);
    this.exerciceName = '';
    this.update();
  }

  public start() {
    this.action(this.createExercice());
    this.back();
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
