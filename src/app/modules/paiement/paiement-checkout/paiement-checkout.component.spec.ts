import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementCheckoutComponent } from './paiement-checkout.component';

describe('PaiementCheckoutComponent', () => {
  let component: PaiementCheckoutComponent;
  let fixture: ComponentFixture<PaiementCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
