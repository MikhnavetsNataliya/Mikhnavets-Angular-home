/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('App: CompleteGuideFinalWebpack', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el = fixture.debugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', async(() => {
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    expect(component.title).toBe('app works!');
    expect(component.title).not.toBe('App Works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let titleH1 = component.title;
    let h1 = fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();

    expect(el.query(By.css('h1')).nativeElement.textContent).toBe(titleH1);
  }));
});
