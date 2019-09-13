import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerControlComponent } from './container/timer-control.component';
import { OddComponent } from './component/odd/odd.component';
import { EvenComponent } from './component/even/even.component';

@NgModule({
  declarations: [TimerControlComponent, OddComponent, EvenComponent],
  imports: [CommonModule],
  exports: [TimerControlComponent, OddComponent, EvenComponent]
})

export class TimerControlModule { }
