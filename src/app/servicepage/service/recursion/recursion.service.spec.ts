import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  fit('Сума ряду значення', () => {
    // Вхідні дані для тесту
    let x=0.1;
    let y=0.99999848;
    let y1=service.getSeriesRecursive(x);
    console.log(y1);

    expect(y.toFixed(2)).toBe(y1.toFixed(2));
    });
});
