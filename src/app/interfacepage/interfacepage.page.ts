import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Show_console } from './class/Show_console';
import { Show_desktop } from './class/Show_desktop';
import { Bird } from './class/Bird';
import { Parnokopitne } from './class/Parnokopitne';

import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MyHeaderComponent]

})
export class InterfacepagePage implements OnInit {
  show: string ="";
  show2: string ="";


  constructor() { }

  ngOnInit() {
  }

  ras(){
    let show_con = new Show_console();
    let show_desk = new Show_desktop();
    
    
    let parnokopitne = new Parnokopitne(" 1 ", 55, show_desk);
    this.show = show_desk.info;
    console.log(parnokopitne.move());

    
    let bird = new Bird(" 3 ", 0.3, show_desk);
    this.show2 = show_desk.info;
    console.log(bird.move());
    
  }

}
