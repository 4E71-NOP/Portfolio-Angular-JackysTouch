import { TestBed, inject } from '@angular/core/testing';

import { MongoDBService } from './data.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MongoDBService]
    });
  });

  it('should be created', inject([MongoDBService], (service: MongoDBService) => {
    expect(service).toBeTruthy();
  }));
});
