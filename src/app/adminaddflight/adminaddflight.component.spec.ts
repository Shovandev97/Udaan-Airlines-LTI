import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddflightComponent } from './adminaddflight.component';

describe('AdminaddflightComponent', () => {
  let component: AdminaddflightComponent;
  let fixture: ComponentFixture<AdminaddflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
