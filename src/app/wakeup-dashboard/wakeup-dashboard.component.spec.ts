import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WakeupDashboardComponent } from './wakeup-dashboard.component';

describe('WakeupDashboardComponent', () => {
  let component: WakeupDashboardComponent;
  let fixture: ComponentFixture<WakeupDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WakeupDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WakeupDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
