import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Row } from '../../models/row';

@Component({
  selector: 'app-ngrx-row',
  templateUrl: './ngrx-row.component.html',
  styleUrls: ['./ngrx-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxRowComponent {
  @Input() row: Row;

  ngOnChange(){
    debugger;
  }
}
