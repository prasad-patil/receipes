import { TestBed } from '@angular/core/testing';

import { ReceipesService } from './receipes.service';

describe('ReceipesService', () => {
  let service: ReceipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
