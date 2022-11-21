import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultContentValueComponent } from './search-result-content-value.component';

describe('SearchResultContentValueComponent', () => {
  let component: SearchResultContentValueComponent;
  let fixture: ComponentFixture<SearchResultContentValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultContentValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultContentValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
