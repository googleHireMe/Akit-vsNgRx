import { Component, Input, OnInit } from '@angular/core';
import { Row } from '../../models/row';

@Component({
  selector: 'app-akita-row',
  templateUrl: './akita-row.component.html',
  styleUrls: ['./akita-row.component.scss']
})
export class AkitaRowComponent {
  @Input() row: Row;
}
