import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WakeupSettingsComponent } from './wakeup-settings.component';

describe('WakeupSettingsComponent', () => {
  let component: WakeupSettingsComponent;
  let fixture: ComponentFixture<WakeupSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WakeupSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WakeupSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
