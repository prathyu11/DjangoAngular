import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStuComponent } from './add-edit-stu.component';

describe('AddEditStuComponent', () => {
  let component: AddEditStuComponent;
  let fixture: ComponentFixture<AddEditStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditStuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
