import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';


@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  yy: number = 0;
  private xy = new Map();
  constructor(@Optional() private logService: LogService) { }

  getSeriesRecursive(x: number, n: number = 1, term: number = 1, sum: number = 1, sign: number = -1): number {
    if (Math.abs(term) < 1e-12) {
        return sum;
    }

    term *= x * x / (2 * n) / (2 * n - 1);
    sum += sign * term;
    sign *= -1;
    n++;

    return this.getSeriesRecursive(x, n, term, sum, sign);
}

getTab(xn: number = -3 * Math.PI, xk: number = 3 * Math.PI, h: number = 0.1) {
  let x = xn;

  while (x <= xk) {
    const y = this.getSeriesRecursive(x);
    this.xy.set(x, y);
    
    if (this.logService)
      this.logService.write("x=" + x.toFixed(2) + " y=" + y.toFixed(4));
    
    x += h;
  }

  return this.xy;
}

}
