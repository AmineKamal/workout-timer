import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from 'src/services/storage';
import { Workout as W } from 'src/services/workout';
import { Workout } from '../components/workout-creator/workout-creator.component';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {
  public workouts: Workout[];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.workouts = Storage.workouts;
  }

  async start(i: number) {
    W.start(this.modalController, this.workouts[i]);
  }
}
