import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-publier-une-annonce',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    FormsModule
  ],
  templateUrl: './publier-une-annonce.component.html',
  styleUrl: './publier-une-annonce.component.css'
})
export class PublierUneAnnonceComponent {
  step1 =false;
  step2 =false;
  openTab = 1;
  prix = 0;

  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }
  changeStateStep1(){
    this.step1=true;
    this.openTab=2;
  }
  changeStateStep2(){
    this.step2=true;
  }

  protected readonly parseFloat = parseFloat;
}
