import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCoursesPage } from './view-courses.page';

describe('ViewCoursesPage', () => {
  let component: ViewCoursesPage;
  let fixture: ComponentFixture<ViewCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCoursesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
