import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { NgrxRowsState } from './row.reducers';
import { rowsReducer } from './row.reducers';

export interface NgrxAppState {
  rowsState: NgrxRowsState;
}

const reducers = {
  rowsState: rowsReducer,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
  ]
})
export class NgrxStoreModule { }
