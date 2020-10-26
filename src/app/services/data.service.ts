import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { Row } from '../models/row';

@Injectable({ providedIn: 'root' })
export class DataService {

    getData() {
        const rows: Row[] = [];
        for (let index = 0; index < this.rowsCount; index++) {
            rows.push({
                id: index,
                item1: faker.date.future().toDateString(),
                item2: faker.date.future().toDateString(),
                item3: faker.date.future().toDateString(),
                item4: faker.date.future().toDateString(),
                item5: faker.date.future().toDateString(),
                item6: faker.date.future().toDateString(),
                item7: faker.date.future().toDateString(),
                item8: faker.date.future().toDateString(),
                item9: faker.date.future().toDateString()
            });
        }

        return rows;
    }

    get rowsCount() {
        return 1000;
    }

    get itemsCountToUpdate() {
        return 1000;
    }

    get iterationsCount() {
        return 50;
    }
}
