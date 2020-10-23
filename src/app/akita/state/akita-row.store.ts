import { Injectable } from '@angular/core';
import { Store, StoreConfig, EntityState, EntityStore } from '@datorama/akita';

export interface AkitaRowState extends EntityState<Row, number> {
  selectedTask: Task;
}

const createInitialState = () => ({});

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'akita-row', idKey: 'id' })
export class AkitaRowStore extends EntityStore<AkitaRowState> {
  constructor() {
    super(createInitialState());
  }
}
