import { createSelector, createFeatureSelector } from '@ngrx/store';
import { NgrxRowsState, rowsAdapter } from './row.reducers';
import { NgrxAppState } from './ngrx-store.module';


const selectRowsState = createFeatureSelector<NgrxAppState, NgrxRowsState>('rowsState');
const { selectAll } = rowsAdapter.getSelectors();

export const selectRows = createSelector(
  selectRowsState,
  selectAll
);

