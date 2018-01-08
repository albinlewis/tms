import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseSelectorComponent } from './database-selector.component';

describe('DatabaseSelectorComponent', () => {
  let component: DatabaseSelectorComponent;
  let fixture: ComponentFixture<DatabaseSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
