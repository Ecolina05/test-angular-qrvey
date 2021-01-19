import { TestBed } from '@angular/core/testing';

import { FavoriteCountriesService } from './favorite-countries.service';

describe('FavoriteCountriesService', () => {
  let service: FavoriteCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
