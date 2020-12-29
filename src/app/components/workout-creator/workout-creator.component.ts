import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { multiplier, sum } from 'src/utils/number';
import { extract } from 'src/utils/object';
import { toTime } from 'src/utils/string';
import { Exercice, ExerciceCreatorComponent } from '../exercice-creator/exercice-creator.component';
import { ComponentAction } from '../types';
import { ItemReorderEventDetail } from '@ionic/core';
import { DataModalPickerComponent } from '../data-modal-picker/data-modal-picker.component';
import { Storage } from 'src/services/storage';

export interface Workout {
  name: string;
  exercices: Exercice[];
  totalTime: number;
}

@Component({
  selector: 'app-workout-creator',
  templateUrl: './workout-creator.component.html',
  styleUrls: ['./workout-creator.component.scss'],
})
export class WorkoutCreatorComponent implements OnInit {
  @Input() actions: ComponentAction<Workout>[];
  @Input() back: () => void;
  @Input() exercices: Exercice[] = [];
  @Input() workoutName = '';

  public activateReorder = false;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  public run(i: number) {
    const { action, quit } = this.actions[i];
    action(this.createWorkout());

    if (quit) { this.back(); }
  }

  public async createExercice() {
    const modal = await this.modalController.create({
      component: ExerciceCreatorComponent,
      componentProps: {
        back: async () => await modal.dismiss(),
        actions: [
          {
            name: 'CREATE',
            action: (exercice: Exercice) => this.exercices.push(exercice),
            quit: true
          }
        ]
      }
    });

    return await modal.present();
  }

  public removeExercice(i: number) {
    this.exercices.splice(i, 1);
  }

  public async editExercice(i: number) {
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
            action: (ex: Exercice) => (this.exercices[i] = ex),
            quit: true
          }
        ],
        elements,
        exerciceName
      }
    });

    return await modal.present();
  }

  public toggleReorder() {
    this.activateReorder = !this.activateReorder;
  }

  public doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    this.exercices = ev.detail.complete(this.exercices);
  }

  public toTime(time: number, ms = false) {
    return toTime(ms ? time / 1000 : time);
  }

  async showExercices() {
    const modal = await this.modalController.create({
      component: DataModalPickerComponent,
      componentProps: {
        back: () => modal.dismiss(),
        action: (exercice: Exercice) => this.exercices.push(exercice),
        title: 'Exercices',
        color: 'secondary',
        data: Storage.exercices
      }
    });

    await modal.present();
  }

  private createWorkout() {
    const exercicesTime = sum(this.exercices.map(extract('totalTime')).map(multiplier(1 / 1000)));
    const restTime = sum(this.exercices.map(extract('elements')).map(([, , , , , , e]) => e.value), 1);

    const workout: Workout = {
      name: this.workoutName || 'Quick Workout',
      exercices: this.exercices,
      totalTime: exercicesTime + restTime
    };

    return workout;
  }
}
