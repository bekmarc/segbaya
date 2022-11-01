import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeaderAllComponent } from './section-header-all.component';

describe('SectionHeaderAllComponent', () => {
  let component: SectionHeaderAllComponent;
  let fixture: ComponentFixture<SectionHeaderAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHeaderAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionHeaderAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
