import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<my-warningAlert></my-warningAlert>
  <my-successAlert></my-successAlert>
  <my-username></my-username><br>
  <my-buttondetails></my-buttondetails>`,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
