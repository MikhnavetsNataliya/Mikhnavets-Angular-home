import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  numberArray = [];
  value = 1;
  timer: any;

  start() {
    this.timer = setInterval(() => {
      this.numberArray.push(this.value);
      return this.value++; }, 1000);
  }
  stop() {
    clearInterval(this.timer);
  }
}
