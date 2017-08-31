import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  let target: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    target = new AppComponent();
    fixture.detectChanges();
  }));


  describe(`n0828 App`, () => {

    describe(`Integration Test`, () => {

      it(`checkbox 應該使用 onClick 拋轉元素 Event (target.checked)`, () => {
        htmlElement = debugElement.query(By.css('input[type="checkbox"]')).nativeElement;
        htmlElement.click();
        expect(component.isDisabled).toBe(false);
      });

      it(`submit button 應該使用 isDisabled 來判斷 disabled 狀態`, () => {
        // htmlElement = debugElement.query(By.css('')).nativeElement;

        component.isDisabled = true;
        fixture.detectChanges();

        htmlElement = debugElement.query(By.css('button[type="submit"]')).nativeElement;

        // todo 這邊無法取得 disabled
        expect(htmlElement.getAttribute('disabled')).toBe('');
      });

    });

    describe(`Unit Test`, () => {

      it(`Class 應有 isDisabled 且初始值為 true`, () => {
        expect(component.isDisabled).toBe(true);
      });

    });

  });

});
