import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiosContainerComponent } from './audios-container.component';

describe('AudiosContainerComponent', () => {
  let component: AudiosContainerComponent;
  let fixture: ComponentFixture<AudiosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiosContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
