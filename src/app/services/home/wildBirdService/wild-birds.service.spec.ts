import { TestBed } from '@angular/core/testing';

import { WildBirdsService } from './wild-birds.service';

describe('WildBirdsService', () => {
  let service: WildBirdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WildBirdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
