import { TestBed } from '@angular/core/testing';

import { MFDataService } from './mf-data.service';

describe('MFDataService', () => {
  let service: MFDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MFDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
