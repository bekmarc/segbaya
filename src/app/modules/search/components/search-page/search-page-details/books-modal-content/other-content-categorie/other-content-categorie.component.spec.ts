import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherContentCategorieComponent } from './other-content-categorie.component';

describe('OtherContentCategorieComponent', () => {
  let component: OtherContentCategorieComponent;
  let fixture: ComponentFixture<OtherContentCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherContentCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherContentCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
