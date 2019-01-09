import { TestBed } from '@angular/core/testing';

import { PuppiesService } from './puppies.service';

describe('PuppiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PuppiesService = TestBed.get(PuppiesService);
    expect(service).toBeTruthy();
  });
});
