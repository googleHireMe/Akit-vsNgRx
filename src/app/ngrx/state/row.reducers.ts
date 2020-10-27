import { Action, createReducer, on } from '@ngrx/store';
import * as RowActions from './row.actions';
import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';
import { Row } from '../../models/row';

export interface NgrxRowsState extends EntityState<Row> {
}

export const rowsAdapter: EntityAdapter<Row> = createEntityAdapter<Row>({
  selectId: (row: Row) => row.id
});

const initialState: NgrxRowsState = rowsAdapter.getInitialState({});

const reducer = createReducer(
  initialState,
  on(RowActions.addRow, (state, { row }) => {
    return rowsAdapter.addOne(row, state);
  }),
  on(RowActions.setRow, (state, { row }) => {
    return rowsAdapter.setOne(row, state);
  }),
  on(RowActions.updateRow, (state, { update }) => {
    return rowsAdapter.updateOne(update, state);
  }),
);

export function rowsReducer(state: NgrxRowsState | undefined = initialState, action: Action): NgrxRowsState {
  return reducer(state, action);
}

