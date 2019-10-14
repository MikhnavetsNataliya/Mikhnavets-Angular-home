import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../LocalStorage.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  formLog: FormGroup;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.formLog = new FormGroup({
        formLogName: new FormControl(null, Validators.required)
      }
    );
  }

  onSubmit(Log) {
    this.localStorageService.addLog(Log);
    console.log(Log);
  }

}
