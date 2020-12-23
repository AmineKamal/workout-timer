import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TimerComponent } from '../components/timer/timer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AdsenseModule } from 'ng2-adsense';
import { ExerciceCreatorComponent } from '../components/exercice-creator/exercice-creator.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule,
    AdsenseModule.forRoot({
      adtest: 'on'
    }),
  ],
  entryComponents: [],
  declarations: [HomePage]
})
export class HomePageModule {}
