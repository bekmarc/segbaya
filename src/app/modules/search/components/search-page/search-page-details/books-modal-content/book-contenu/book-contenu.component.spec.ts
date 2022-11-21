import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContenuComponent } from './book-contenu.component';

describe('BookContenuComponent', () => {
  let component: BookContenuComponent;
  let fixture: ComponentFixture<BookContenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookContenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookContenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
