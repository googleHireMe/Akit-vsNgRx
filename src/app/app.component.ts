import { Component, OnInit } from '@angular/core';
import { enableAkitaProdMode } from '@datorama/akita';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'StateManagement';

  ngOnInit(): void {
    enableAkitaProdMode();
  }
}
