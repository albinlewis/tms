import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotetrackerComponent } from './notetracker.component';

describe('NotetrackerComponent', () => {
  let component: NotetrackerComponent;
  let fixture: ComponentFixture<NotetrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotetrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotetrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
