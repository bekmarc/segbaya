import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementProcessStepUnComponent } from './paiement-process-step-un.component';

describe('PaiementProcessStepUnComponent', () => {
  let component: PaiementProcessStepUnComponent;
  let fixture: ComponentFixture<PaiementProcessStepUnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementProcessStepUnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementProcessStepUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
