import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiosSectionComponent } from './audios-section.component';

describe('AudiosSectionComponent', () => {
  let component: AudiosSectionComponent;
  let fixture: ComponentFixture<AudiosSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiosSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
