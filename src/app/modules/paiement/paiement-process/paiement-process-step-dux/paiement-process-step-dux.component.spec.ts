import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementProcessStepDuxComponent } from './paiement-process-step-dux.component';

describe('PaiementProcessStepDuxComponent', () => {
  let component: PaiementProcessStepDuxComponent;
  let fixture: ComponentFixture<PaiementProcessStepDuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementProcessStepDuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementProcessStepDuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
