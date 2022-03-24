import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightswithoutuidComponent } from './flightswithoutuid.component';

describe('FlightswithoutuidComponent', () => {
  let component: FlightswithoutuidComponent;
  let fixture: ComponentFixture<FlightswithoutuidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightswithoutuidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightswithoutuidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
