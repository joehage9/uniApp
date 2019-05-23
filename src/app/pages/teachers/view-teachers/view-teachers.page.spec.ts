import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeachersPage } from './view-teachers.page';

describe('ViewTeachersPage', () => {
  let component: ViewTeachersPage;
  let fixture: ComponentFixture<ViewTeachersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTeachersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeachersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
