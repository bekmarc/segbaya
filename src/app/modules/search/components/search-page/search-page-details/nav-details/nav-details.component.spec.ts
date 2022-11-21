import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDetailsComponent } from './nav-details.component';

describe('NavDetailsComponent', () => {
  let component: NavDetailsComponent;
  let fixture: ComponentFixture<NavDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
