import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { clone } from 'src/utils/object';
import { Exercice, ExerciceCreatorComponent } from '../components/exercice-creator/exercice-creator.component';
import { TimerComponent } from '../components/timer/timer.component';

export interface Workout {
  name: string;
  exercices: Exercice[];
}

@Component({
  selector: 'app-quick-workout',
  templateUrl: './quick-workout.page.html',
  styleUrls: ['./quick-workout.page.scss'],
})
export class QuickWorkoutPage implements OnInit {

  public exercices: Exercice[] = [];
  public workoutName = '';

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  public async start() {

    const workout: Workout = {
      name: this.workoutName || 'Quick Workout',
      exercices: this.exercices
    };

    const modal = await this.modalController.create({
      component: TimerComponent,
      componentProps: {
        back: async () => await modal.dismiss(),
        workout: clone(workout)
      }
    });

    await modal.present();
    this.exercices = [];
    this.workoutName = '';
  }

  public async createExercice() {
    const modal = await this.modalController.create({
      component: ExerciceCreatorComponent,
      componentProps: {
        back: async () => await modal.dismiss(),
        actionName: 'CREATE',
        action: (exercice: Exercice) => this.exercices.push(exercice)
      }
    });

    return await modal.present();
  }
}
