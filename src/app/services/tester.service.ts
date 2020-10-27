import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as faker from 'faker';
import { AkitaRowStore } from '../akita/state/akita-row.store';
import { Row } from '../models/row';
import { NgrxAppState } from '../ngrx/ngrx-store.module';
import { addRow, setRow, updateRow } from '../ngrx/state/row.actions';
import { DataService } from './data.service';
import { StateManager, UpdateMethod } from '../models/enums';
import { Update } from '@ngrx/entity';

@Injectable({ providedIn: 'root' })
export class TesterService {

  stateManager: StateManager;
  updateMethod: UpdateMethod;
  private rows: Row[];

  constructor(private ngrxStore: Store<NgrxAppState>,
              private akitaStore: AkitaRowStore,
              private dataService: DataService) {
    this.rows = dataService.getData();
  }


  add(): void {
    console.time(`[${this.stateManager}] Adding items`);
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
      console.timeEnd(`[${this.stateManager}] Adding items`);
    });
  }

  update(): void {
    console.time(`[${this.stateManager}][${this.updateMethod}] Updating items`);
    let currentItertaion = 0;
    const intervalId = setInterval(() => {
      for (let index = 0; index < this.dataService.itemsCountToUpdate; index++) {
        const randItemIndex = Math.floor(Math.random() * this.dataService.rowsCount);
        const itemToUpdate = Math.floor(Math.random() * 10);
        const newText = faker.name.firstName();

        if (this.stateManager === StateManager.Akita) {
          if (this.updateMethod === UpdateMethod.Set) {
            const newRow = { ...this.rows[randItemIndex], [`item${itemToUpdate}`]: newText };
            this.setAkita(newRow);
          }
          if (this.updateMethod === UpdateMethod.Update) {
            this.updateAkita(randItemIndex, { [`item${itemToUpdate}`]: newText });
          }
        }
        if (this.stateManager === StateManager.NgRx) {
          if (this.updateMethod === UpdateMethod.Set) {
            const newRow = { ...this.rows[randItemIndex], [`item${itemToUpdate}`]: newText };
            this.setNgrx(newRow);
          }
          if (this.updateMethod === UpdateMethod.Update) {
            this.updateNgrx(randItemIndex, { [`item${itemToUpdate}`]: newText });
          }
        }
      }

      if (currentItertaion >= this.dataService.iterationsCount) {
        clearInterval(intervalId);
        console.timeEnd(`[${this.stateManager}][${this.updateMethod}] Updating items`);
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

  private setNgrx(row: Row): void {
    this.ngrxStore.dispatch(setRow({ row }));
  }

  private setAkita(row: Row): void {
    this.akitaStore.upsert(row.id, row);
  }

  private updateNgrx(index: number, changes: Partial<Row>): void {
    const update: Update<Row> = { id: index, changes };
    this.ngrxStore.dispatch(updateRow({ update }));
  }

  private updateAkita(index: number, changes: Partial<Row>): void {
    this.akitaStore.update(index, changes);
  }


}
