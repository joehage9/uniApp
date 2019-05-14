import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMajorPage } from './add-major.page';

describe('AddMajorPage', () => {
  let component: AddMajorPage;
  let fixture: ComponentFixture<AddMajorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMajorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMajorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
