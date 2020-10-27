import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenComponent } from './table/screen/screen.component';

const routes: Routes = [
  {
    path: 'table',
    component: ScreenComponent
  },
  {
    path: '',
    redirectTo: 'table',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
