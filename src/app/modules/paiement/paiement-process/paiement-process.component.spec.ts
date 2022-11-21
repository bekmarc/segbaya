import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementProcessComponent } from './paiement-process.component';

describe('PaiementProcessComponent', () => {
  let component: PaiementProcessComponent;
  let fixture: ComponentFixture<PaiementProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
