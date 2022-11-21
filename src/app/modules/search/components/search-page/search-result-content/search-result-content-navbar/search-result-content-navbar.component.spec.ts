import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultContentNavbarComponent } from './search-result-content-navbar.component';

describe('SearchResultContentNavbarComponent', () => {
  let component: SearchResultContentNavbarComponent;
  let fixture: ComponentFixture<SearchResultContentNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultContentNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultContentNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
