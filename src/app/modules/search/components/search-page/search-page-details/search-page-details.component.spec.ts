import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageDetailsComponent } from './search-page-details.component';

describe('SearchPageDetailsComponent', () => {
  let component: SearchPageDetailsComponent;
  let fixture: ComponentFixture<SearchPageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPageDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
