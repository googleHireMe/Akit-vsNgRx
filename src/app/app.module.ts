import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { NgrxModule } from './ngrx/ngrx.module';
import { AkitaModule } from './akita/akita.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    StoreModule.forRoot({}, {}),
    NgrxModule,
    AkitaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
