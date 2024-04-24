import {Component, EventEmitter, Output} from '@angular/core';
import {StateSectionComponent} from "./state-section/state-section.component";
import {CategorySectionComponent} from "./category-section/category-section.component";
import {SubCategorySectionComponent} from "./subcategory-section/subCategory-section.component";
import {PriceSectionComponent} from "./price-section/price-section.component";
import {ColorSectionComponent} from "./color-section/color-section.component";
import {FilterInterface} from "../../../shared/types/filter.interface";

@Component({
  selector: 'app-filter-section',
  standalone: true,
  imports: [
    StateSectionComponent,
    CategorySectionComponent,
    SubCategorySectionComponent,
    PriceSectionComponent,
    ColorSectionComponent
  ],
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.css'
})
export class FilterSectionComponent {
  @Output() newItemEvent = new EventEmitter<FilterInterface>();
  filter: FilterInterface = {
    filter: [
      { filtername: '', filterValues: [] }
    ]
  };

  addCategorieFilter(data: any) {
    this.filter.filter.push(data);
    this.newItemEvent.emit(this.filter);
  }
  addColorsFilter(data:any){
    this.filter.filter.push(data);
    this.newItemEvent.emit(this.filter);
  }

  addNewItem(data: any) {
    this.newItemEvent.emit(this.filter);
  }

  addSubCategorieFilter(data:any) {
    this.filter.filter.push(data);
    this.newItemEvent.emit(this.filter);
  }

  addStateFilter(data:any) {
    this.filter.filter.push(data);
    this.newItemEvent.emit(this.filter);
  }
}
