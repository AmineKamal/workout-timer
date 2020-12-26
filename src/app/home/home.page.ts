import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
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

  constructor(private modalController: ModalController, private toastController: ToastController) {}

  ngOnInit() {}

  public async quickWorkout() {
    const index = Storage.workouts.length;

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
            action: (workout: Workout) => {
              if (Storage.workouts.length > index) {
                Storage.update('workouts', (v) => (v[index] = workout));
              } else {
                Storage.update('workouts', (v) => v.push(workout));
              }

              this.displaySaveToast();
            },
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

  private async displaySaveToast() {
    const toast = await this.toastController.create({
      message: 'Your workout has been saved.',
      duration: 2000,
      color: 'success'
    });

    await toast.present();
  }
}
