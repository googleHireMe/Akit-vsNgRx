import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as faker from 'faker';
import { AkitaRowStore } from '../akita/state/akita-row.store';
import { Row } from '../models/row';
import { NgrxAppState } from '../ngrx/ngrx-store.module';
import { addRow, updateRow } from '../ngrx/state/row.actions';
import { DataService } from './data.service';
import { StateManager } from '../models/enums';

@Injectable({ providedIn: 'root' })
export class TesterService {

  get stateManager(): StateManager {
    return this._stateManager;
  }
  set stateManager(manager: StateManager) {
    this._stateManager = manager;
  }

  private _stateManager: StateManager;
  private rows: Row[] = [];

  constructor(private ngrxStore: Store<NgrxAppState>,
              private akitaStore: AkitaRowStore,
              private dataService: DataService) {
    this.rows = dataService.getData();
  }


  add(): void {
    console.time('Adding items');
    const portions = this.dataService.rowsCount / 10;
    for (let index = 0; index < portions; index++) {
      const from = index * 10;
      const to = index * 10 + 10;
      const itemsToAdd = this.rows.slice(from, to);

      itemsToAdd.forEach(item => {
        if (this.stateManager === StateManager.Akita) {
          this.addAkita(item);
        }
        if (this.stateManager === StateManager.NgRx) {
          this.addNgrx(item);
        }
      });
    }
    setTimeout(() => {
      console.timeEnd('Adding items');
    });
  }

  update(): void {
    console.time('Updating items');
    let currentItertaion = 0;
    const intervalId = setInterval(() => {
      for (let index = 0; index < this.dataService.itemsCountToUpdate; index++) {
        const randItemIndex = Math.floor(Math.random() * this.dataService.rowsCount);
        const itemToUpdate = Math.floor(Math.random() * 10);
        const newText = faker.name.firstName();
        const newRow = { ...this.rows[randItemIndex], [`item${itemToUpdate}`]: newText };

        if (this.stateManager === StateManager.Akita) {
          this.updateAkita(newRow);
        }
        if (this.stateManager === StateManager.NgRx) {
          this.updateNgrx(newRow);
        }
      }

      if (currentItertaion >= this.dataService.iterationsCount) {
        clearInterval(intervalId);
        console.timeEnd('Updating items');
      }
      currentItertaion++;
    });
  }

  private addNgrx(row: Row): void {
    this.ngrxStore.dispatch(addRow({ row }));
  }

  private addAkita(row: Row): void {
    this.akitaStore.add(row);
  }

  private updateNgrx(row: Row): void {
    this.ngrxStore.dispatch(updateRow({ row }));
  }

  private updateAkita(row: Row): void {
    this.akitaStore.upsert(row.id, row);
  }


}
