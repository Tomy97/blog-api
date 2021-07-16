import { TestBed } from '@angular/core/testing';

import { PosteosService } from './posteos.service';

describe('PosteosService', () => {
  let service: PosteosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosteosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
