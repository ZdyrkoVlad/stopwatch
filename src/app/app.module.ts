import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchComponent } from './watch/watch.component';
import {PersonalTime} from "./pipes/personal-time";

@NgModule({
  declarations: [
    AppComponent,
    WatchComponent,
    PersonalTime
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
