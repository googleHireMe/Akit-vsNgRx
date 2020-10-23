import { createAction, props } from '@ngrx/store';
import { Row } from '../../models/row';

const ADD = '[Row] LOAD';
const UPDATE = '[Row] LOAD_SUCCESS';

export const addRow = createAction(
  ADD,
  props<{row: Row}>()
);

export const updateRow = createAction(
  UPDATE,
  props<{row: Row}>()
);