import { TestBed } from '@angular/core/testing';

import { ConferencesService } from './conferences.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ConferencesService', () => {
  let service: ConferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        ConferencesService,
      ],
    });
    service = TestBed.inject(ConferencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
