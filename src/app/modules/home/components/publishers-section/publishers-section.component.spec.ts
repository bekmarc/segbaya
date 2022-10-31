import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishersSectionComponent } from './publishers-section.component';

describe('PublishersSectionComponent', () => {
  let component: PublishersSectionComponent;
  let fixture: ComponentFixture<PublishersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishersSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
