import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerCoolComponent } from './spinner-cool.component';

describe('SpinnerCoolComponent', () => {
  let component: SpinnerCoolComponent;
  let fixture: ComponentFixture<SpinnerCoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerCoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerCoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
