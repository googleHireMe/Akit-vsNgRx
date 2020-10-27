import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Row } from '../../models/row';

const ADD = '[Row] ADD';
const SET = '[Row] SET';
const UPDATE = '[Row] UPDATE';

export const addRow = createAction(
  ADD,
  props<{row: Row}>()
);

export const setRow = createAction(
  SET,
  props<{row: Row}>()
);

export const updateRow = createAction(
  UPDATE,
  props<{ update: Update<Row> }>()
);
