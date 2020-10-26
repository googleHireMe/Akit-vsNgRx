import { Component } from '@angular/core';
import { enableAkitaProdMode } from '@datorama/akita';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StateManagement';

  ngOnInit(){
    enableAkitaProdMode();
  }
}
