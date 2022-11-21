import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementViewComponent } from './paiement-view.component';

describe('PaiementViewComponent', () => {
  let component: PaiementViewComponent;
  let fixture: ComponentFixture<PaiementViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
