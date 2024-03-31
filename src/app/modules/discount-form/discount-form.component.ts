import { Component } from '@angular/core';

@Component({
  selector: 'app-discount-form',
  standalone: true,
    imports: [
    ],
  templateUrl: './discount-form.component.html',
  styleUrl: './discount-form.component.css'
})
export class DiscountFormComponent {
  value: number = 45.000;
  formattedValue(): string {
    return this.value.toFixed(3);
  }
}
