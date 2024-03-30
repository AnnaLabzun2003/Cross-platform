import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TabService } from './service/tab/tab.service';
import { SeriesService } from './service/series/series.service';
import { RecursionService } from './service/recursion/recursion.service';
import { Chart, registerables } from 'chart.js';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MyHeaderModule } from '../my-header/my-header.component.module';


@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MyHeaderModule]
})
export class ServicepagePage implements OnInit, AfterViewInit {
  constructor(
    private tabService: TabService,
    private seriesServise: SeriesService,
    private recursionServise: RecursionService
  ) {}

  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput = new Map();

  // Add canvas and chart variables
  canvas: any;
  ctx: any;

  ngOnInit() {}

  ngAfterViewInit() {
    // Initialize Chart.js
    Chart.register(...registerables);

    // Get canvas and context
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');

    // Call your function to get data and plot charts
    this.ras(-9.42, 9.42, 0.1); // Example parameters, adjust as needed
  }

  input(){
    this.xyTab.forEach((value, key, map)=>{
      let s='';
      let y:number = 0;
      y=value;
      s=y.toFixed(4)+" ";
      y=this.xySeries.get(key);
      s=s+y.toFixed(4);
      y=this.xyRecursion.get(key);
      s=s+" "+y.toFixed(4);
      let x=key;
      this.xyInput.set(x.toFixed(2),s);

    })
    
  };

  ras(xn: any, xk: any, h: any) {
    let xn1 = parseFloat(xn),
      xk1 = parseFloat(xk),
      h1 = parseFloat(h);

    console.log('Табулювання');
    this.xyTab = this.tabService.getTab(xn1, xk1, h1);
    console.log('Ряд');
    this.xySeries = this.seriesServise.getTab(xn1, xk1, h1);
    console.log('Рекурсія');
    this.xyRecursion = this.recursionServise.getTab(xn1, xk1, h1);
    this.input();
    // Call function to plot charts
    this.plotCharts();
  }

  plotCharts() {
    // Extract x and y values from maps
    const xValues = Array.from(this.xyTab.keys());
    const yTabValues = Array.from(this.xyTab.values());
    const ySeriesValues = Array.from(this.xySeries.values());
    const yRecursionValues = Array.from(this.xyRecursion.values());

    // Plot charts
    const myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: xValues,
        datasets: [
          {
            label: 'Tabulation',
            data: yTabValues,
            borderColor: 'red',
            fill: false,
          },
          {
            label: 'Series',
            data: ySeriesValues,
            borderColor: 'blue',
            fill: false,
          },
          {
            label: 'Recursion',
            data: yRecursionValues,
            borderColor: 'green',
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
          },
          y: {
            min: -1,
          },
        },
      },
    });
  }
}
