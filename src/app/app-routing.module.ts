import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgrxTableComponent } from './ngrx/ngrx-table/ngrx-table.component';
import { AkitaTableComponent } from './akita/akita-table/akita-table.component';

const routes: Routes = [
  {
    path: 'ngrx',
    component: NgrxTableComponent
  },
  {
    path: 'akita',
    component: AkitaTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
