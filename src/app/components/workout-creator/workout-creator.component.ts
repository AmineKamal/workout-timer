import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Exercice, ExerciceCreatorComponent } from '../exercice-creator/exercice-creator.component';
import { ComponentAction } from '../types';

export interface Workout {
  name: string;
  exercices: Exercice[];
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

  private createWorkout() {
    const workout: Workout = {
      name: this.workoutName || 'Quick Workout',
      exercices: this.exercices
    };

    return workout;
  }
}
