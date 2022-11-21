import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksModalContentComponent } from './books-modal-content.component';

describe('BooksModalContentComponent', () => {
  let component: BooksModalContentComponent;
  let fixture: ComponentFixture<BooksModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksModalContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
