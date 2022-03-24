import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingpassengerdetailsComponent } from './boardingpassengerdetails.component';

describe('BoardingpassengerdetailsComponent', () => {
  let component: BoardingpassengerdetailsComponent;
  let fixture: ComponentFixture<BoardingpassengerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardingpassengerdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardingpassengerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
