import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WakeupShowPresetsComponent } from './wakeup-show-presets.component';

describe('WakeupShowPresetsComponent', () => {
  let component: WakeupShowPresetsComponent;
  let fixture: ComponentFixture<WakeupShowPresetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WakeupShowPresetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WakeupShowPresetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
