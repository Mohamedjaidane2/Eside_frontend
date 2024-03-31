import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-price-section',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './price-section.component.html',
  styleUrl: './price-section.component.css'
})
export class PriceSectionComponent {
  min = 0;
  max = 100;
  minValue = 0;
  maxValue = 100;
  sliderLeft = '0%';
  sliderRight = '0%';

  constructor() { }


  onMinChange() {
    if (this.min > this.max) {
      this.min = this.max;
    }
    this.sliderLeft = `${(this.min / this.maxValue) * 100}%`;
  }

  onMaxChange() {
    if (this.max < this.min) {
      this.max = this.min;
    }
    this.sliderRight = `${100 - (this.max / this.maxValue) * 100}%`;
  }

  isMinDisabled(): boolean {
    return this.min >= this.max;
  }

  isMaxDisabled(): boolean {
    return this.max <= this.min;
  }
}
