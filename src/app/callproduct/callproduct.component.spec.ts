/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CallproductComponent } from './callproduct.component';

describe('CallproductComponent', () => {
  let component: CallproductComponent;
  let fixture: ComponentFixture<CallproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
