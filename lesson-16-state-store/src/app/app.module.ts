import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LogFormComponent } from './component/log-form/log-form.component';
import { LogsComponent } from './component/logs/logs.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LocalStorageService } from './component/LocalStorage.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, LogFormComponent, LogsComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LocalStorageService]
})
export class AppModule { }
