import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19TrackerComponent } from './covid19-tracker.component';

describe('Covid19TrackerComponent', () => {
  let component: Covid19TrackerComponent;
  let fixture: ComponentFixture<Covid19TrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Covid19TrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19TrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
