import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistitemComponent } from './tasklistitem.component';

describe('TasklistitemComponent', () => {
  let component: TasklistitemComponent;
  let fixture: ComponentFixture<TasklistitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasklistitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
