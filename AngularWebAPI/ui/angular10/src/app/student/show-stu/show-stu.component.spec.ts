import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStuComponent } from './show-stu.component';

describe('ShowStuComponent', () => {
  let component: ShowStuComponent;
  let fixture: ComponentFixture<ShowStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
