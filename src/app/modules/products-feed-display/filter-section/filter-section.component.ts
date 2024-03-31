import { Component } from '@angular/core';
import {StateSectionComponent} from "./state-section/state-section.component";
import {GenderSectionComponent} from "./gender-section/gender-section.component";
import {MarqueSectionComponent} from "./marque-section/marque-section.component";
import {PriceSectionComponent} from "./price-section/price-section.component";
import {ColorSectionComponent} from "./color-section/color-section.component";

@Component({
  selector: 'app-filter-section',
  standalone: true,
  imports: [
    StateSectionComponent,
    GenderSectionComponent,
    MarqueSectionComponent,
    PriceSectionComponent,
    ColorSectionComponent
  ],
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.css'
})
export class FilterSectionComponent {

}
