import { TestBed } from '@angular/core/testing';

import { CardDesignsService } from './card-designs.service';

describe('CardDesignsService', () => {
  let service: CardDesignsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardDesignsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
