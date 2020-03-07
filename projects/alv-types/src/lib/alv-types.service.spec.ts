import { TestBed } from '@angular/core/testing';

import { AlvTypesService } from './alv-types.service';

describe('AlvTypesService', () => {
  let service: AlvTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlvTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
