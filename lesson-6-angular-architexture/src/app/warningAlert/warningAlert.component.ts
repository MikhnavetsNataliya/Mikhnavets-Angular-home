import {Component} from "@angular/core";

@Component({
  selector: 'my-warningAlert',
  template: `
  <h2>Task 1</h2>
  <div>
    This is a danger alert—check it out!
  </div>
  `,
  styles: ['div {color: #721c24;background-color: #f8d7da; border-color: #f5c6cb; padding: .75rem 1.25rem; margin-bottom: 1rem; border: 1px solid transparent; border-radius: .25rem;}']
})

export class WarningAlert {

}