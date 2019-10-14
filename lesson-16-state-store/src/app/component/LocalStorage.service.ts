import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { of } from 'rxjs'

export interface Log {
 id: string,
 text: string,
 date: any
}

@Injectable()
export class LocalStorageService {
  private log: Log;
  private logs: Log[] = [];
  
  private logEntry = new BehaviorSubject<Log>('');
  private logSelect = this.logEntry.asObservable();
  private stateEntry = new BehaviorSubject(true);
  private stateClear = this.stateEntry.asObservable();

  getLog() {
    if (localStorage.getItem('logs') === null) {
            this.logs = [];
        }
        else {
            this.logs = JSON.parse(localStorage.getItem('logs'));
        }
        return of(this.logs.sort(new Data())
        )
  };

  setLog(logs){
    this.logEntry.next(logs);
    console.log(this.logs);
  }

  addLog(log) {
    this.logs.unshift(log);
    localStorage.setItem('logs', JSON.stringify(this.logs));
    console.log(this.logs);
  }

  updateLog(log) {
    this.stateEntry.next
  };

  removeLog(log) {
    localStorage.removeItem( log );
  };
  
  clearState(){
    this.stateEntry.next(true);
  };

}
