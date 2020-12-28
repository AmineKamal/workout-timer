import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Storage } from 'src/services/storage';
import { clone, extract } from 'src/utils/object';
import { parseTime, toTime } from 'src/utils/string';
import { ExercicePresetsComponent } from '../exercice-presets/exercice-presets.component';
import { ComponentAction } from '../types';

export type WorkoutElementUnit = 's' | 'reps';

export interface WorkoutSettingElement {
  title: string;
  value: number;
  icon: string;
  unit?: WorkoutElementUnit;
  reppable?: boolean;
  presetConfigurable?: boolean;
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

export interface ExercicePreset {
  name: string;
  elements: Elements;
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
  @Input() isPreset = false;
  @Input() forcePreset = false;

  public preset?: ExercicePreset;
  public time = '04:00';
  public intervals = 16;

  private totalTime: number;
  private previousActions: ComponentAction<Exercice>[] = [];

  public constructor(private changeDetectorRef: ChangeDetectorRef, private modalController: ModalController, private toastController: ToastController) {}

  public ngOnInit() {
    if (!this.forcePreset) {
      this.previousActions = this.actions;
      this.updatePreset();
    }

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

  public applyPreset(preset: ExercicePreset) {
    this.preset = preset;

    if (!preset) { return; }

    for (let i = 0; i < preset.elements.length; i++) {
        this.elements[i] = clone(preset.elements[i]);
    }

    this.update();
  }

  public updatePreset() {
    if (this.isPreset)
    {
      this.savePreviousActions();
      this.actions.push({
        name: 'SAVE PRESET',
        action: (input: Exercice) => {
          Storage.update('presets', (v) => v.push(input));
          this.displaySaveToast();
          this.isPreset = false;
        }
      });
    }
    else
    {
      this.restorePreviousActions();
    }

    this.changeDetectorRef.detectChanges();
  }

  async showPresets() {
    const modal = await this.modalController.create({
      component: ExercicePresetsComponent,
      componentProps: {
        back: () => modal.dismiss(),
        action: (preset: ExercicePreset) => this.applyPreset(preset)
      }
    });

    await modal.present();
  }

  private savePreviousActions() {
    this.previousActions = clone(this.actions);
    this.actions = [];
  }

  private restorePreviousActions() {
    this.actions = clone(this.previousActions);
    this.previousActions = [];
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

  private async displaySaveToast() {
    const toast = await this.toastController.create({
      message: `Your preset has been saved.`,
      duration: 2000,
      color: 'success'
    });

    await toast.present();
  }
}
