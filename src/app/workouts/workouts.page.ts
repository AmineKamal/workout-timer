import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from 'src/services/storage';
import { Workout as W } from 'src/services/workout';
import { toTime } from 'src/utils/string';
import { Workout, WorkoutCreatorComponent } from '../components/workout-creator/workout-creator.component';

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

  async add() {
    const modal = await this.modalController.create({
      component: WorkoutCreatorComponent,
      componentProps: {
        back: async () => await modal.dismiss(),
        actions: [
          {
            name: 'CREATE',
            action: (workout: Workout) => Storage.update('workouts', (v) => v.push(workout)),
            quit: true
          }
        ]
      }
    });

    await modal.present();
  }

  remove(i: number) {
    Storage.update('workouts', (v) => v.splice(i, 1));
  }

  async edit(i: number) {
    const workout = this.workouts[i];

    const modal = await this.modalController.create({
      component: WorkoutCreatorComponent,
      componentProps: {
        back: async () => await modal.dismiss(),
        actions: [
          {
            name: 'EDIT',
            action: (w: Workout) => Storage.update('workouts', (v) => (v[i] = w)),
            quit: true
          }
        ],
        exercices: workout.exercices,
        workoutName: workout.name
      }
    });

    await modal.present();
  }

  toTime(time: number, ms = false) {
    return toTime(ms ? time / 1000 : time);
  }
}
