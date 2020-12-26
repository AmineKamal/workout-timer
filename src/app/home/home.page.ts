import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from 'src/services/storage';
import { Workout as W } from 'src/services/workout';
import { clone } from 'src/utils/object';
import { Exercice, ExerciceCreatorComponent } from '../components/exercice-creator/exercice-creator.component';
import { TimerComponent } from '../components/timer/timer.component';
import { WorkoutCreatorComponent, Workout } from '../components/workout-creator/workout-creator.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  public async quickWorkout() {
    const modal = await this.modalController.create({
      component: WorkoutCreatorComponent,
      componentProps: {
        back: async () => await modal.dismiss(),
        actions: [
          {
            name: 'START',
            action: (workout: Workout) =>  W.start(this.modalController, workout),
            quit: true
          },
          {
            name: 'SAVE',
            action: (workout: Workout) => Storage.update('workouts', (v) => v.push(workout)),
          }
        ]
      }
    });
    await modal.present();
  }

  public async quickExercice() {
      const modal = await this.modalController.create({
        component: ExerciceCreatorComponent,
        componentProps: {
          back: async () => await modal.dismiss(),
          actions: [
            {
              name: 'START',
              action: (exercice: Exercice) => W.start(this.modalController, exercice),
              quit: true
            }
          ]
        }
      });

      return await modal.present();
  }
}
