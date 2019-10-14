import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../LocalStorage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  
  private subscription: Subscription;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.subscription = this.localStorageService.logSelect
      .subscribe((val: any) => {
        this.Log = val.value;
        console.log(this.Log);
      });
  }
}

