import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Exercice } from '../components/exercice-creator/exercice-creator.component';
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

  constructor(
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  async start(exercice: Exercice) {

    const workout: Workout = {
      name: 'Quick Workout',
      exercices: [exercice]
    };

    const modal = await this.modalController.create({
      component: TimerComponent,
      componentProps: {
        back: async () => await modal.dismiss(),
        workout
      }
    });

    return await modal.present();
  }
}
