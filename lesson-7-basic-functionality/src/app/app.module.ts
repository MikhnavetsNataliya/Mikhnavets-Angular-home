import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { TimerControlModule } from './timer-control/timer-control.module';

@NgModule({
  imports:      [ BrowserModule, TimerControlModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
