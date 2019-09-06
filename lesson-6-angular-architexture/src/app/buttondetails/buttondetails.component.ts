import { Component } from '@angular/core';

@Component({
  selector: 'my-buttondetails',
  templateUrl: './buttondetails.component.html',
  styleUrls: [ './buttondetails.component.css' ]
})
export class ButtonDetailsComponent  {
  title: string = 'Task 3';
  ditail: string = '';
  visibility = true;
  counterClick = 0;
  array = [];
  
  constructor() {
  }
  
  visibilityParagraf(){
    const time = new Date();
    this.visibility = !this.visibility;
    this.counterClick++;
    const obj: object = {counterClick: this.counterClick, time: time};
    this.array.push(obj);
  }  
}
