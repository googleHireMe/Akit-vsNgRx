import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxStoreModule } from './state/ngrx-store.module';
import { NgrxTableComponent } from './ngrx-table/ngrx-table.component';
import { NgrxRowComponent } from './ngrx-row/ngrx-row.component';
import { NgrxTestComponent } from './ngrx-test/ngrx-test.component';

@NgModule({
  declarations: [
    NgrxTableComponent,
    NgrxRowComponent,
    NgrxTestComponent
  ],
  imports: [
    CommonModule,
    NgrxStoreModule
  ]
})
export class NgrxModule { }
