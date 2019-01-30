import { TestBed } from '@angular/core/testing';

import { ShowResolver } from './show-resolver.service';

describe('ShowResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowResolver = TestBed.get(ShowResolver);
    expect(service).toBeTruthy();
  });
});
