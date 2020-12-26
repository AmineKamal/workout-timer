import { ModalController } from '@ionic/angular';
import { Exercice } from 'src/app/components/exercice-creator/exercice-creator.component';
import { TimerComponent } from 'src/app/components/timer/timer.component';
import { Workout as W } from 'src/app/components/workout-creator/workout-creator.component';
import { clone } from 'src/utils/object';

export const Workout = new class {

    public async start(modalController: ModalController, workout: W | Exercice)
    {
        if (isExercice(workout)) {
            workout = this.createQuickExerciceWorkout(workout);
        }

        const modal = await modalController.create({
            component: TimerComponent,
            componentProps: {
              back: async () => await modal.dismiss(),
              workout: clone(workout)
            }
          });

        await modal.present();
    }

    private createQuickExerciceWorkout(exercice: Exercice) {
        const workout: W = {
            name: 'Quick Exercice',
            exercices: [exercice]
        };

        return workout;
    }
}();

function isExercice(ex: any): ex is Exercice {
    return ex && ex.name && ex.elements && ex.totalTime;
}
