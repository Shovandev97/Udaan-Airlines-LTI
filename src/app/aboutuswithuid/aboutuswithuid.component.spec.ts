import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutuswithuidComponent } from './aboutuswithuid.component';

describe('AboutuswithuidComponent', () => {
  let component: AboutuswithuidComponent;
  let fixture: ComponentFixture<AboutuswithuidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutuswithuidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutuswithuidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
