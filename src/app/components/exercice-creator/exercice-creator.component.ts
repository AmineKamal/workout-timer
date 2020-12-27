import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { clone, extract } from 'src/utils/object';
import { parseTime, toTime } from 'src/utils/string';
import { ComponentAction } from '../types';

export type WorkoutElementUnit = 's' | 'reps';

export interface WorkoutSettingElement {
  title: string;
  value: number;
  icon: string;
  unit?: WorkoutElementUnit;
  reppable?: boolean;
}

export type Elements = [
  WorkoutSettingElement,
  WorkoutSettingElement,
  WorkoutSettingElement,
  WorkoutSettingElement,
  WorkoutSettingElement,
  WorkoutSettingElement,
  WorkoutSettingElement
];

export interface Exercice {
  name: string;
  elements: Elements;
  totalTime: number;
}

const defaultSettings: Elements =
[
  { title: 'Prepare', value: 10, icon: 'accessibility-outline', unit: 's' },
  { title: 'Work', value: 20, icon: 'barbell-outline', unit: 's', reppable: true },
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
  @Input() actions: ComponentAction<Exercice>[];
  @Input() back: () => void;
  @Input() elements: Elements = clone(defaultSettings);
  @Input() exerciceName = '';

  public time = '04:00';
  public intervals = 16;

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

  public run(i: number) {
    const { action, quit } = this.actions[i];
    action(this.createExercice());

    if (quit) { this.back(); }
  }

  updateTime(event: any, i: number) {
    const value: string = event.detail.value;
    const seconds = parseTime(value);

    if (this.elements[i].value === seconds) { return; }

    this.elements[i].value = seconds;
    this.update();
  }

  toTime(time: number, ms = false) {
    return toTime(ms ? time / 1000 : time, true);
  }

  public toggleReps(i: number) {
    const element = this.elements[i];
    if (!element.reppable) { return; }

    if (element.unit === 'reps') {
      element.unit = 's';
      element.value = defaultSettings[i].value;
    } else {
      element.unit = 'reps';
      element.value = 0;
    }

    this.update();
  }

  private createExercice(): Exercice {
    return {
      name: this.exerciceName || 'Quick Exercice',
      elements: this.elements,
      totalTime: this.totalTime * 1000
    };
  }

  private update() {
    const [, workElement] = this.elements;
    const [prepare, work, rest, cycles, sets, restSets] = this.elements.map(extract('value'));

    this.totalTime = workElement.unit === 's' ? work * cycles : 0;
    this.totalTime += rest * (cycles - 1);
    this.totalTime *= sets;
    this.totalTime += restSets * (sets - 1);
    this.totalTime += prepare;

    this.time = toTime(this.totalTime);
    this.intervals = cycles * sets;
    this.changeDetectorRef.detectChanges();
  }
}
