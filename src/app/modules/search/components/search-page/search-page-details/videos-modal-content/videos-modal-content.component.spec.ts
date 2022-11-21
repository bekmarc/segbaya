import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosModalContentComponent } from './videos-modal-content.component';

describe('VideosModalContentComponent', () => {
  let component: VideosModalContentComponent;
  let fixture: ComponentFixture<VideosModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosModalContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
