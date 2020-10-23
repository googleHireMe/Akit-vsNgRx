import { Component, OnInit, Input } from '@angular/core';
import { Row } from '../../models/row';

@Component({
  selector: 'app-ngrx-row',
  templateUrl: './ngrx-row.component.html',
  styleUrls: ['./ngrx-row.component.scss']
})
export class NgrxRowComponent {
  @Input() row: Row;
}
