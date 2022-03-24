import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomewithoutuidComponent } from './homewithoutuid.component';

describe('HomewithoutuidComponent', () => {
  let component: HomewithoutuidComponent;
  let fixture: ComponentFixture<HomewithoutuidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomewithoutuidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomewithoutuidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
