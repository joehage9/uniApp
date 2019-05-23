import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignStudentToMajorPage } from './assign-student-to-major.page';

describe('AssignStudentToMajorPage', () => {
  let component: AssignStudentToMajorPage;
  let fixture: ComponentFixture<AssignStudentToMajorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignStudentToMajorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignStudentToMajorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
