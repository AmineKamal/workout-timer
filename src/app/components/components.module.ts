import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExerciceCreatorComponent } from './exercice-creator/exercice-creator.component';
import { TimerComponent } from './timer/timer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { WorkoutCreatorComponent } from './workout-creator/workout-creator.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { DataModalPickerComponent } from './data-modal-picker/data-modal-picker.component';

const COMPONENTS = [
    HeaderComponent,
    FooterComponent,
    ActionBarComponent,
    ExerciceCreatorComponent,
    WorkoutCreatorComponent,
    TimerComponent,
    DataModalPickerComponent
];

@NgModule({
    declarations: COMPONENTS,
    exports: COMPONENTS,
    entryComponents: COMPONENTS,
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        NgCircleProgressModule.forRoot({
            radius: 170,
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
    ]
})
export class ComponentsModule {}
