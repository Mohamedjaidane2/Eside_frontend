import {Component, EventEmitter, OnInit, Output,AfterViewInit} from '@angular/core';
import {AdsService} from "../../../../core/_services/ads.service";
import {StorageService} from "../../../../core/_services/storage.service";
import {Store} from "@ngrx/store";
import {CategoryStateInterface} from "../../../../core/store/statesInterfaces/Advertisment/categoryState.interface";
import {selectListCategories} from "../../../../core/store/reducers/Advertisment/category.reducer";
import {CategoryDto} from "../../../../core/models/category";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FilterInterface} from "../../../../shared/types/filter.interface";

@Component({
  selector: 'app-categorie-section',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.css'
})
export class CategorySectionComponent implements OnInit {
  categorieList!: CategoryDto[];
  checkedValues = {
    filtername: "categories",
    filterValues: [] as string[]
  };
  @Output() categoryCheckedValuesEvent = new EventEmitter<typeof this.checkedValues>();

  constructor(
    private adsService: AdsService,
    private storageService: StorageService,
    private store: Store<{ store: CategoryStateInterface }>
  ) {
    this.checkedValues = {
      filtername: "categories",
      filterValues: [] as string[]
    };

    this.store.select(selectListCategories).subscribe(res => {
      this.categorieList = res!;
    });
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.categoryCheckedValuesEvent.emit(this.checkedValues);
    });
  }
  isChecked(categoryName: string): boolean {
    return this.checkedValues.filterValues.includes(categoryName);
  }

  updateCheckedValues(checked: boolean, categoryName: string) {
    if (checked) {
      this.checkedValues.filterValues.push(categoryName);
      //this.categoryCheckedValuesEvent.emit(this.checkedValues);
    } else {
      const index = this.checkedValues.filterValues.indexOf(categoryName);
      if (index !== -1) {
        this.checkedValues.filterValues.splice(index, 1);
        //this.categoryCheckedValuesEvent.emit(this.checkedValues);
      }
    }
    //console.log(this.checkedValues); // You can remove this line, it's just for debugging
  }
}
