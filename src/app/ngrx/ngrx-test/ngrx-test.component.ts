import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Row } from '../../models/row';
import { NgrxAppState } from '../state/ngrx-store.module';
import { DataService } from '../../services/data.service';
import * as faker from 'faker';
import { addRow, testRow, updateRow } from '../state/row.actions';
import { AkitaRowStore } from 'src/app/akita/state/akita-row.store';
import { TesterService } from '../../services/tester.service';

@Component({
  selector: 'app-ngrx-test',
  templateUrl: './ngrx-test.component.html',
  styleUrls: ['./ngrx-test.component.scss']
})
export class NgrxTestComponent {

  private rows: Row[] = [];

  constructor(
              private dataService: DataService,
              private tableService: TesterService) {
    this.rows = dataService.getData();
  }

  add(): void {
    this.tableService.add();
  }


}
