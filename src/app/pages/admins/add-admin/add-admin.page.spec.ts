import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminPage } from './add-admin.page';

describe('AddAdminPage', () => {
  let component: AddAdminPage;
  let fixture: ComponentFixture<AddAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
