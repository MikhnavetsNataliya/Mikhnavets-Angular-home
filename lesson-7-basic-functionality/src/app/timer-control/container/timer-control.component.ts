import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.css']
})
export class TimerControlComponent {
  startBtn = 'start';
  stopBtn = 'stop';

  @Output()
  start: EventEmitter<any> = new EventEmitter();

  @Output()
  stop: EventEmitter<any> = new EventEmitter();

  startTimer() {
    this.start.emit();
  }

  stopTimer() {
    this.stop.emit();
  }
}