import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NaselPunct } from './Class/NaselPunct';
import { City } from './Class/City';
import { Village } from './Class/Village';


@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class AbstractClassPage implements OnInit {

  population: NaselPunct[] = [];

  constructor() { }

  ngOnInit() {
  }

  getRandomInt() {
    return Math.floor(Math.random() * 100 + 1)
  }

  getRandomIntForS() {
    return Math.floor(Math.random() * 500 + 50)
  }

  getRandomIntForH() {
    return Math.floor(Math.random() * 400000 + 100)
  }

  getRandomIntForS_v() {
    return Math.floor(Math.random() * 100 + 5)
  }

  getRandomIntForH_v() {
    return Math.floor(Math.random() * 100 + 1)
  }

  getRandomIntForc_v(){
    return Math.floor(Math.random() * 10 + 1)
  }
 

  calculate(nn: any) {
    this.population = new Array();
    let n = parseInt(nn);
    let numOfC = 1; 
    let numOfV = 1; 

    for (let i = 0; i < n; ++i) {
      if (i % 2 === 0) {
        let randomIntForS = this.getRandomIntForS();
        let randomIntForH = this.getRandomIntForH();
        this.population.push(new City(`Сity ${numOfC++}`, randomIntForS, randomIntForH));
      }
      else {
        let randomIntForS_v = this.getRandomIntForS_v();
        let randomIntForH_v= this.getRandomIntForH_v();
        let randomIntForC_v = this.getRandomIntForc_v();
        this.population.push(new Village(`Village ${numOfV++}`, randomIntForS_v, randomIntForH_v, randomIntForC_v));
      }
    }

    this.population.forEach((el) => {
      el.calculatePopulation();
      console.log(el.show());
    });
  }

}
