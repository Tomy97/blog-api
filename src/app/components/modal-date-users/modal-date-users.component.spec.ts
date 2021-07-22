import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDateUsersComponent } from './modal-date-users.component';

describe('ModalDateUsersComponent', () => {
  let component: ModalDateUsersComponent;
  let fixture: ComponentFixture<ModalDateUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDateUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDateUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
