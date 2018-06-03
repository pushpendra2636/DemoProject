/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PproductComponent } from './pproduct.component';

describe('PproductComponent', () => {
  let component: PproductComponent;
  let fixture: ComponentFixture<PproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
