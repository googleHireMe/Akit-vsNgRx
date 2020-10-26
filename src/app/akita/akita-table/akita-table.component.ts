import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Row } from 'src/app/models/row';
import { AkitaRowQuery } from '../state/akita-row.query';
import { AkitaRowStore } from '../state/akita-row.store';

@Component({
  selector: 'app-akita-table',
  templateUrl: './akita-table.component.html',
  styleUrls: ['./akita-table.component.scss']
})
export class AkitaTableComponent {

  rows$: Observable<Row[]> = this.query.rows$;

  constructor(private store: AkitaRowStore,
              private query: AkitaRowQuery) {
  }

  trackByFn(index: number, item: Row) {
      return item.id;
  }

}
