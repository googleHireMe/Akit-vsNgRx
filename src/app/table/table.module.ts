import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { RowComponent } from './row/row.component';
import { ScreenComponent } from './screen/screen.component';



@NgModule({
  declarations: [
    TableComponent,
    RowComponent,
    ScreenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TableModule { }
