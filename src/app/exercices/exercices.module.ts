import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExercicesPageRoutingModule } from './exercices-routing.module';

import { ExercicesPage } from './exercices.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ExercicesPageRoutingModule
  ],
  declarations: [ExercicesPage]
})
export class ExercicesPageModule {}
