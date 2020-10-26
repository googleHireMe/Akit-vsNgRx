import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkitaTableComponent } from './akita-table/akita-table.component';
import { AkitaRowComponent } from './akita-row/akita-row.component';



@NgModule({
  declarations: [
    AkitaTableComponent,
    AkitaRowComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AkitaModule { }
