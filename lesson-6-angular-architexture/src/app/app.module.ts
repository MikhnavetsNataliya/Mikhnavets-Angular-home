import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { WarningAlert } from './warningAlert/warningAlert.component';
import { SuccessAlert } from './successAlert/successAlert.component';

import { UserNameComponent } from './username/username.component';

import { ButtonDetailsComponent} from './buttondetails/buttondetails.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, WarningAlert, SuccessAlert, UserNameComponent, ButtonDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
