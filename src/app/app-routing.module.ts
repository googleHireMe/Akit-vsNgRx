import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgrxTestComponent } from './ngrx/ngrx-test/ngrx-test.component';
import { AkitaTableComponent } from './akita/akita-table/akita-table.component';
import { AkitaTestComponent } from './akita/akita-test/akita-test.component';
import { ScreenComponent } from './table/screen/screen.component';

const routes: Routes = [
  {
    path: 'ngrx',
    component: NgrxTestComponent
  },
  {
    path: 'akita',
    component: AkitaTestComponent
  },
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
