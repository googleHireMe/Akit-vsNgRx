import { Injectable } from '@angular/core';
import { Store, StoreConfig, EntityState, EntityStore } from '@datorama/akita';
import { Row } from '../../models/row';

export interface AkitaRowState extends EntityState<Row, number> {
}

const createInitialState = () => ({});

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'akita-row', idKey: 'id' })
export class AkitaRowStore extends EntityStore<AkitaRowState> {
  constructor() {
    super(createInitialState());
  }
}
