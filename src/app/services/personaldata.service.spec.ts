import { TestBed } from '@angular/core/testing';

import { PersonaldataService } from './personaldata.service';

describe('PersonaldataService', () => {
  let service: PersonaldataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaldataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
