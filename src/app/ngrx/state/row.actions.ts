import { createAction, props } from '@ngrx/store';
import { Row } from '../../models/row';

const ADD = '[Row] ADD';
const UPDATE = '[Row] UPDATE';
const TEST = '[Row] TEST';

export const testRow = createAction(
  TEST
);

export const addRow = createAction(
  ADD,
  props<{row: Row}>()
);

export const updateRow = createAction(
  UPDATE,
  props<{row: Row}>()
);
