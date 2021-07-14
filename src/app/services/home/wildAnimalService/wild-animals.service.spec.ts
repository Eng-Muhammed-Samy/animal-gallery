import { TestBed } from '@angular/core/testing';

import { WildAnimalsService } from './wild-animals.service';

describe('WildAnimalsService', () => {
  let service: WildAnimalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WildAnimalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
