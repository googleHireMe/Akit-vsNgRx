import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AkitaRowQuery } from 'src/app/akita/state/akita-row.query';
import { StateManager } from 'src/app/models/enums';
import { Row } from 'src/app/models/row';
import { NgrxAppState } from 'src/app/ngrx/state/ngrx-store.module';
import { selectRows } from 'src/app/ngrx/state/row.selectors';
import { TesterService } from 'src/app/services/tester.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent {

  ngRxRows$: Observable<Row[]> = this.ngrxStore.select(selectRows);
  akitaRows$: Observable<Row[]> = this.akitaQuery.rows$;
  StateManager = StateManager;

  get selectedStateManager(): StateManager {
    return this.testerService.stateManager;
  }

  constructor(private testerService: TesterService,
              private ngrxStore: Store<NgrxAppState>,
              private akitaQuery: AkitaRowQuery) { }

  selectStateManager(manager: StateManager): void {
    this.testerService.stateManager = manager;
  }

  add(): void {
    this.testerService.add();
  }

  update(): void {
    this.testerService.update();
  }

}
