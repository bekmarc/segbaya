import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultContentContainerComponent } from './search-result-content-container.component';

describe('SearchResultContentContainerComponent', () => {
  let component: SearchResultContentContainerComponent;
  let fixture: ComponentFixture<SearchResultContentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultContentContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
