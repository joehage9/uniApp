import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeacherPage } from './add-teacher.page';

describe('AddTeacherPage', () => {
  let component: AddTeacherPage;
  let fixture: ComponentFixture<AddTeacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeacherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
