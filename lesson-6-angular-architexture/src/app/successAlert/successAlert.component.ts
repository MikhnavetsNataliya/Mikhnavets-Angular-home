import { Component } from "@angular/core";

@Component({
  selector: 'my-successAlert',
  templateUrl: './successAlert.component.html',
  styleUrls: ['./successAlert.component.css']
})

export class SuccessAlert {
  successMsg: string = 'This is a success alert—check it out!'
}