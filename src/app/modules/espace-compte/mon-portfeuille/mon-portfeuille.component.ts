import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-mon-portfeuille',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './mon-portfeuille.component.html',
  styleUrl: './mon-portfeuille.component.css'
})
export class MonPortfeuilleComponent {

  protected readonly open = open;
  toggle: number = 1;

  changetoggle(number : number){
    this.toggle=number;
  }
  isCollapsed1 = false
  isCollapsed2 = false
  isCollapsed3 = false


  toggleCollapse(num: number) {
    if(num==1){
      this.isCollapsed1=!this.isCollapsed1
      this.isCollapsed2=false
      this.isCollapsed3=false
    }else if(num==2){
      this.isCollapsed1=false
      this.isCollapsed2=!this.isCollapsed2
      this.isCollapsed3=false
    }else if(num==3){
      this.isCollapsed1=false
      this.isCollapsed2=false
      this.isCollapsed3=!this.isCollapsed3
    }
  }
}
