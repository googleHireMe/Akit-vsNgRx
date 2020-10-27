import { Action } from '@ngrx/store';
import { Row } from 'src/app/models/row';

export enum ActionTypes {
  Add = 'Add Row',
  Update = 'Update Row'
}

export class Add implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: Row) {
  }
}

export class Update implements Action {
  readonly type = ActionTypes.Update;

  constructor(public payload: { itemIndex: number, property: string, value: any }) {
  }
}


export const initialState = () => ({ rows: [] });

export function rowsPlainReducer(state = initialState(), action: Action) {
  switch (action.type) {
    case ActionTypes.Add:
      return {...state, rows: [...state.rows, (action as Add).payload]};
    case ActionTypes.Update:
      const payload = (action as Update).payload;
      const newRows = [...state.rows];
      newRows[payload.itemIndex] = { ...state.rows[payload.itemIndex], [payload.property]: payload.value };
      return { rows: newRows};

    default:
      return state;
  }
}