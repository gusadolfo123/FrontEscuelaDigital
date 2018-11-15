import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DLessonsComponent } from './d-lessons.component';

describe('DLessonsComponent', () => {
  let component: DLessonsComponent;
  let fixture: ComponentFixture<DLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
