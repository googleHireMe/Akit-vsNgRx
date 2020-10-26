import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Row } from '../../models/row';
import { Store } from '@ngrx/store';
import { selectRows } from '../state/row.selectors';
import { NgrxAppState } from '../state/ngrx-store.module';

@Component({
  selector: 'app-ngrx-table',
  templateUrl: './ngrx-table.component.html',
  styleUrls: ['./ngrx-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxTableComponent {

  rows$: Observable<Row[]> = this.store.select(selectRows);

  constructor(private store: Store<NgrxAppState>) {
  }

  trackByFn(index: number, item: Row) {
      return item.id;
  }
}
