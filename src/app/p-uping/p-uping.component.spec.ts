/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PUpingComponent } from './p-uping.component';

describe('PUpingComponent', () => {
  let component: PUpingComponent;
  let fixture: ComponentFixture<PUpingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PUpingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PUpingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
