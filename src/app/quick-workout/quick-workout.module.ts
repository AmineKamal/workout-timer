import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuickWorkoutPageRoutingModule } from './quick-workout-routing.module';

import { QuickWorkoutPage } from './quick-workout.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuickWorkoutPageRoutingModule,
    ComponentsModule
  ],
  declarations: [QuickWorkoutPage]
})
export class QuickWorkoutPageModule {}
