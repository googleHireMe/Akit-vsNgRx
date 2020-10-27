import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { NgrxRowsState } from './state/row.reducers';
import { rowsReducer } from './state/row.reducers';
import { rowsPlainReducer } from './state/row-plain.reducer';

export interface NgrxAppState {
  rowsState: NgrxRowsState;
  rowsPlainState: any;
}

const reducers = {
  rowsState: rowsReducer,
  rowsPlainState: rowsPlainReducer
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
  ]
})
export class NgrxStoreModule { }
