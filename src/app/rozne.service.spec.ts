import { TestBed } from '@angular/core/testing';

import { RozneService } from './rozne.service';

describe('RozneService', () => {
  let service: RozneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RozneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
