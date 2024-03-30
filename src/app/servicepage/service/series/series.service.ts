import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy = new Map();
  constructor(@Optional() private logService: LogService) { }

  getSeries(x: number) {
    let sum: number = 1;
    let term = 1;
    let n = 1;
    let sign = -1;

    while (Math.abs(term) >= 1e-12) {
      term *= x * x / (2 * n) / (2 * n - 1); // Виправлено формулу
      sum += sign * term;
      sign *= -1;
      n++;
    }

    return sum;
}


  
getTab(xn: number = -3 * Math.PI, xk: number = 3 * Math.PI, h: number = 0.1) {
    let x = xn;

    while (x <= xk) {
      const y = this.getSeries(x);
      this.xy.set(x, y);
      
      if (this.logService)
        this.logService.write("x=" + x.toFixed(2) + " y=" + y.toFixed(4));
      
      x += h;
    }

    return this.xy;
  }
}
