import { Injectable } from '@angular/core';
import { Query, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Row } from '../../models/row';
import { AkitaRowState, AkitaRowStore } from './akita-row.store';

@Injectable({ providedIn: 'root' })
export class AkitaRowQuery extends QueryEntity<AkitaRowState> {

  rows$: Observable<Row[]> = this.selectAll();

  constructor(protected store: AkitaRowStore) {
    super(store);
  }
}
