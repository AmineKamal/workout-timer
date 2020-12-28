import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Guard } from './guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [Guard]
  },
  {
    path: '',
    redirectTo: 'loading',
    pathMatch: 'full'
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'workouts',
    loadChildren: () => import('./workouts/workouts.module').then( m => m.WorkoutsPageModule),
    canActivate: [Guard]
  },
  {
    path: 'exercices',
    loadChildren: () => import('./exercices/exercices.module').then( m => m.ExercicesPageModule),
    canActivate: [Guard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
