import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TimerComponent } from '../timer/timer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AdsenseModule.forRoot({
      adtest: 'on'
    }),
    NgCircleProgressModule.forRoot({
      radius: 160,
      space: -10,
      maxPercent: 100,
      outerStrokeGradient: true,
      outerStrokeWidth: 10,
      outerStrokeColor: '#4882c2',
      outerStrokeGradientStopColor: '#53a9ff',
      innerStrokeColor: '#e7e8ea',
      innerStrokeWidth: 10,
      title: '',
      subtitle: '',
      titleFontSize: '92',
      subtitleFontSize: '49',
      animateTitle: false,
      animation: false,
      animationDuration: 500,
      showUnits: false,
      showBackground: false,
      clockwise: false,
      showSubtitle: false
    })
  ],
  entryComponents: [TimerComponent],
  declarations: [HomePage, TimerComponent]
})
export class HomePageModule {}
