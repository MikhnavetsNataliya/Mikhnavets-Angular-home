import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UsersService } from './services/users.service';
import { CounterService } from './services/counter.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ActiveUsersComponent, InactiveUsersComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UsersService, CounterService]
})
export class AppModule { }
