import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdministrativePage } from './add-administrative.page';

describe('AddAdministrativePage', () => {
  let component: AddAdministrativePage;
  let fixture: ComponentFixture<AddAdministrativePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdministrativePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdministrativePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
