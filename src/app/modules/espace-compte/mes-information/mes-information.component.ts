import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-mes-information',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './mes-information.component.html',
  styleUrl: './mes-information.component.css'
})
export class MesInformationComponent {

  protected readonly open = open;
  toggle: number = 2;

  changetoggle(number : number){
    this.toggle=number;
  }
}
