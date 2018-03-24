import { TestBed, inject } from '@angular/core/testing';

import { PagevisitService } from './pagevisit.service';

describe('PagevisitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagevisitService]
    });
  });

  it('should be created', inject([PagevisitService], (service: PagevisitService) => {
    expect(service).toBeTruthy();
  }));
});
