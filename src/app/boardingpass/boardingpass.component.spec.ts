import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingpassComponent } from './boardingpass.component';

describe('BoardingpassComponent', () => {
  let component: BoardingpassComponent;
  let fixture: ComponentFixture<BoardingpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardingpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardingpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
