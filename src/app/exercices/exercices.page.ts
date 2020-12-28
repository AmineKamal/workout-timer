import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from 'src/services/storage';
import { toTime } from 'src/utils/string';
import { Workout as W } from 'src/services/workout';
import { Exercice, ExerciceCreatorComponent, ExercicePreset } from '../components/exercice-creator/exercice-creator.component';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.page.html',
  styleUrls: ['./exercices.page.scss'],
})
export class ExercicesPage implements OnInit {
  public presets: ExercicePreset[];
  public exercices: Exercice[];
  public currentTab: 'exercices' | 'presets' = 'exercices';

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.presets = Storage.presets;
    this.exercices = Storage.exercices;
  }

  toTime(time: number, ms = false) {
    return toTime(ms ? time / 1000 : time);
  }

  removeExercice(i: number) {
    Storage.update('exercices', (v) => v.splice(i, 1));
  }

  removePreset(i: number) {
    Storage.update('presets', (v) => v.splice(i, 1));
  }

  async editExercice(i: number) {
    const exercice = this.exercices[i];
    const elements = exercice.elements;
    const exerciceName = exercice.name;

    const modal = await this.modalController.create({
      component: ExerciceCreatorComponent,
      componentProps: {
        back: async () => await modal.dismiss(),
        actions: [
          {
            name: 'EDIT',
            action: (e: Exercice) => Storage.update('exercices', (v) => (v[i] = e)),
            quit: true
          }
        ],
        elements,
        exerciceName
      }
    });

    return await modal.present();
  }

  async editPreset(i: number) {
    const preset = this.presets[i];
    const elements = preset.elements;
    const exerciceName = preset.name;

    const modal = await this.modalController.create({
      component: ExerciceCreatorComponent,
      componentProps: {
        back: async () => await modal.dismiss(),
        actions: [
          {
            name: 'EDIT',
            action: (e: Exercice) => Storage.update('presets', (v) => (v[i] = e)),
            quit: true
          }
        ],
        elements,
        exerciceName,
        forcePreset: true,
      }
    });

    return await modal.present();
  }

  async start(i: number) {
    W.start(this.modalController, this.exercices[i]);
  }
}
