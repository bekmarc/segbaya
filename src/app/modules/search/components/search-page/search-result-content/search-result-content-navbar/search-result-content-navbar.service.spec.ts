import { TestBed } from '@angular/core/testing';

import { SearchResultContentNavbarService } from './search-result-content-navbar.service';

describe('SearchResultContentNavbarService', () => {
  let service: SearchResultContentNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchResultContentNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
