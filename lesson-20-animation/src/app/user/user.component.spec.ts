/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { TestBed, async, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from "./user.service";
import { DataService } from "../shared/data.service";

import { By } from '@angular/platform-browser';


describe('Component: User', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let el: DebugElement;
  let userService: UserService;
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        { provide: UserService, useClass: UserService },
        { provide: DataService, useClass: DataService }
      ]
    });
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    userService = el.injector.get(UserService);
    dataService = el.injector.get(DataService);
  });

  it('should create the app', () => {
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    component.ngOnInit();
    expect(component.user).toEqual(userService.user);
  });

  it('should display the user name if user is logged in', () => {
    component.ngOnInit();
    let userName = component.user.name;
    fixture.detectChanges();
    if(component.isLoggedIn){
      expect(el.query(By.css('p')).nativeElement.textContent).toBe(userName);
    }
  });

  it('shouldn\'t display the user name if user is not logged in', () => {
    component.ngOnInit();
    let userName = component.user.name;
    fixture.detectChanges();
    if(!component.isLoggedIn){
      expect(el.query(By.css('p')).nativeElement.textContent).not.toBe(userName);
    }
  });

  it('shouldn\'t fetch data successfully if not called asynchronously', () => {
    spyOn(dataService, 'getDetails').and.callThrough();
    component.ngOnInit();
    expect(dataService.getDetails).toHaveBeenCalled();
  });

  it('should fetch data successfully if called asynchronously', async(() => {
    // by using whenStable()
    component.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.data).toBe('String');
    });
  }));

  it('should fetch data successfully if called asynchronously', fakeAsync(() => {
    // by using tick()
    fixture.detectChanges();
    tick(2000);
    fixture.detectChanges();// for update
    expect(component.data).toBe('String');
  }));
});
