import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Exercice } from '../components/exercice-creator/exercice-creator.component';
import { TimerComponent } from '../components/timer/timer.component';

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
    const modal = await this.modalController.create({
      component: TimerComponent,
      componentProps: {
        back: async () => await modal.dismiss(),
        exercice
      }
    });

    return await modal.present();
  }
}
