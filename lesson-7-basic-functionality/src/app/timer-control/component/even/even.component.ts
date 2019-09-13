import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent {
  @Input() arrCount;

  validateNum() {
    return this.arrCount.filter((item) => (item % 2 === 0 && item !== 0));
  }
}