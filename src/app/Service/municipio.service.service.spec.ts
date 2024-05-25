import { TestBed } from '@angular/core/testing';

import { MunicipioServiceService } from './municipio.service.service';

describe('MunicipioServiceService', () => {
  let service: MunicipioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunicipioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
