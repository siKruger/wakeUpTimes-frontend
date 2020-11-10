import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WakeupShowSingleComponent } from './wakeup-show-single.component';

describe('WakeupShowSingleComponent', () => {
  let component: WakeupShowSingleComponent;
  let fixture: ComponentFixture<WakeupShowSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WakeupShowSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WakeupShowSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
