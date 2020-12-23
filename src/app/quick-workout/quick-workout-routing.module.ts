import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuickWorkoutPage } from './quick-workout.page';

const routes: Routes = [
  {
    path: '',
    component: QuickWorkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuickWorkoutPageRoutingModule {}
