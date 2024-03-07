import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HackerNewsApiService } from '../../services/hacker-news-api.service';

describe('HackerNewsApiService', () => {
  let service: HackerNewsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(HackerNewsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
