import { ChangeDetectorRef, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AkitaRowQuery } from 'src/app/akita/state/akita-row.query';
import { StateManager, UpdateMethod } from 'src/app/models/enums';
import { Row } from 'src/app/models/row';
import { NgrxAppState } from 'src/app/ngrx/ngrx-store.module';
import { selectRows } from 'src/app/ngrx/state/row.selectors';
import { TesterService } from 'src/app/services/tester.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent {

  ngRxPlainRows$: Observable<Row[]> = this.ngrxStore.pipe(select('rowsPlainState', 'rows'));
  ngRxRows$: Observable<Row[]> = this.ngrxStore.select(selectRows);
  akitaRows$: Observable<Row[]> = this.akitaQuery.rows$;
  StateManager = StateManager;
  UpdateMethod = UpdateMethod;

  get selectedStateManager(): StateManager {
    return this.testerService.stateManager;
  }

  get selectedUpdateMethod(): UpdateMethod {
    return this.testerService.updateMethod;
  }

  constructor(private testerService: TesterService,
              private ngrxStore: Store<NgrxAppState>,
              private akitaQuery: AkitaRowQuery) {
  }

  selectStateManager(manager: StateManager): void {
    this.testerService.stateManager = manager;
  }

  selectUpdateMethod(method: UpdateMethod): void {
    this.testerService.updateMethod = method;
  }

  add(): void {
    this.testerService.add();
  }

  update(): void {
    this.testerService.update();
  }

}
