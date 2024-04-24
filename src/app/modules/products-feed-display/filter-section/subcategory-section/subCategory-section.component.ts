import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryDto} from "../../../../core/models/category";
import {AdsService} from "../../../../core/_services/ads.service";
import {StorageService} from "../../../../core/_services/storage.service";
import {Store} from "@ngrx/store";
import {CategoryStateInterface} from "../../../../core/store/statesInterfaces/Advertisment/categoryState.interface";
import {selectListCategories} from "../../../../core/store/reducers/Advertisment/category.reducer";
import {SubCategoryDto} from "../../../../core/models/subCategory";
import {SubCategoryService} from "../../../../core/_services/subcategory.service";
import {NgForOf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-subCategory-section',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './subCategory-section.component.html',
  styleUrl: './subCategory-section.component.css'
})
export class SubCategorySectionComponent implements OnInit {
  subcategorieList!: SubCategoryDto[];
  checkedValues = {
    filtername: "Subcategories",
    filterValues: [] as string[]
  };
@Output() subCategoryCheckedValuesEvent = new EventEmitter<typeof this.checkedValues>();

  constructor(
    private SubCategorieService: SubCategoryService,
    private storageService: StorageService,
) {
    this.checkedValues = {
      filtername: "categories",
      filterValues: [] as string[]
    };
    this.SubCategorieService.getall().subscribe(value=>{this.subcategorieList=value})
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.subCategoryCheckedValuesEvent.emit(this.checkedValues);
    });
  }
  ngAfterViewInit(): void {

}
  isChecked(subCategoryName: string): boolean {
    return this.checkedValues.filterValues.includes(subCategoryName);
  }

  updateCheckedValues(checked: boolean, subCategoryName: string) {
    if (checked) {
      this.checkedValues.filterValues.push(subCategoryName);
      //this.categoryCheckedValuesEvent.emit(this.checkedValues);
    } else {
      const index = this.checkedValues.filterValues.indexOf(subCategoryName);
      if (index !== -1) {
        this.checkedValues.filterValues.splice(index, 1);
        //this.categoryCheckedValuesEvent.emit(this.checkedValues);
      }
    }
    //console.log(this.checkedValues); // You can remove this line, it's just for debugging
  }
}
