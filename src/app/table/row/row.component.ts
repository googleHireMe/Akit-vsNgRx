import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Row } from '../../models/row';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowComponent {

  @Input() row: Row;

}
