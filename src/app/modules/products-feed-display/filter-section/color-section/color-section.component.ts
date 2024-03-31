import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-color-section',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './color-section.component.html',
  styleUrl: './color-section.component.css'
})export class ColorSectionComponent {
  isChecked1: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;
  isChecked4: boolean = false;
  isChecked5: boolean = false;
  isChecked6: boolean = false;
  isChecked7: boolean = false;
  isChecked8: boolean = false;
  isChecked9: boolean = false;
  isChecked10: boolean = false;

  logChecked(isChecked: boolean, color: string) {
    console.log(color + ':', isChecked);
  }
}
