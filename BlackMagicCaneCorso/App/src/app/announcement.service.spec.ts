import { TestBed } from '@angular/core/testing';

import { AnnouncementService } from './announcement.service';

describe('AnnouncementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnouncementService = TestBed.get(AnnouncementService);
    expect(service).toBeTruthy();
  });
});
