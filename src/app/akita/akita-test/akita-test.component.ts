import { Component, NgZone, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/services/data.service';
import { Row } from 'src/app/models/row';
import { AkitaRowStore } from '../state/akita-row.store';
import * as faker from 'faker';
import { AkitaRowQuery } from '../state/akita-row.query';
import { TesterService } from 'src/app/services/tester.service';

@Component({
  selector: 'app-akita-test',
  templateUrl: './akita-test.component.html',
  styleUrls: ['./akita-test.component.scss']
})
export class AkitaTestComponent {
  constructor(private tableService: TesterService) { }

  add(): void {
    this.tableService.add();
  }

  update(): void {
    this.tableService.update();
  }

}
