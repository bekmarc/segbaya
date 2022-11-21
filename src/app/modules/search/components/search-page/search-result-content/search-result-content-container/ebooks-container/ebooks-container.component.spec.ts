import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbooksContainerComponent } from './ebooks-container.component';

describe('EbooksContainerComponent', () => {
  let component: EbooksContainerComponent;
  let fixture: ComponentFixture<EbooksContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbooksContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EbooksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
