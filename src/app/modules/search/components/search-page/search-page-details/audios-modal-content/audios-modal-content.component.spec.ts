import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiosModalContentComponent } from './audios-modal-content.component';

describe('AudiosModalContentComponent', () => {
  let component: AudiosModalContentComponent;
  let fixture: ComponentFixture<AudiosModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiosModalContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiosModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
