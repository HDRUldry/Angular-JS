import { TestBed } from '@angular/core/testing';

import { HomeBOService } from './home-bo.service';

describe('HomeBOService', () => {
  let service: HomeBOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeBOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
