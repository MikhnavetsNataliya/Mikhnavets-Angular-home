import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/component/user-form/user-form.component';
import { UserFormViewerComponent } from './user-form/containers/user-form-viewer/user-form-viewer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UserFormComponent, UserFormViewerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
