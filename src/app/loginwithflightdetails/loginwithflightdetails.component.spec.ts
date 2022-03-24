import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginwithflightdetailsComponent } from './loginwithflightdetails.component';

describe('LoginwithflightdetailsComponent', () => {
  let component: LoginwithflightdetailsComponent;
  let fixture: ComponentFixture<LoginwithflightdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginwithflightdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginwithflightdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
