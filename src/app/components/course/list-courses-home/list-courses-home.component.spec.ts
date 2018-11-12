import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoursesHomeComponent } from './list-courses-home.component';

describe('ListCoursesHomeComponent', () => {
  let component: ListCoursesHomeComponent;
  let fixture: ComponentFixture<ListCoursesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCoursesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoursesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
