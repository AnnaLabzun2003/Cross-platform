import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('Сума ряду значення', () => {
    // Вхідні дані для тесту
    let x=0.1;
    let y=0.99999848;
    let y1=service.getSeries(x);
    console.log(y1);

    expect(y.toFixed(2)).toBe(y1.toFixed(2));
    });
});

