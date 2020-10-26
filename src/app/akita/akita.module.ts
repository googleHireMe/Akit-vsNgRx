import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkitaTableComponent } from './akita-table/akita-table.component';
import { AkitaRowComponent } from './akita-row/akita-row.component';
import { AkitaTestComponent } from './akita-test/akita-test.component';



@NgModule({
  declarations: [
    AkitaTableComponent,
    AkitaRowComponent,
    AkitaTestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AkitaModule { }
