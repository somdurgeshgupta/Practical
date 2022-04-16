import { TestBed } from '@angular/core/testing';

import { AlluserdataService } from './alluserdata.service';

describe('AlluserdataService', () => {
  let service: AlluserdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlluserdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
