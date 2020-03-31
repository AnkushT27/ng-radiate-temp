import { TestBed, inject } from '@angular/core/testing';

import { AssociateBrokerService } from './associate-broker.service';

describe('AssociateBrokerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssociateBrokerService]
    });
  });

  it('should be created', inject([AssociateBrokerService], (service: AssociateBrokerService) => {
    expect(service).toBeTruthy();
  }));
});
