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
import {FilterInterface} from "../../../../shared/types/filter.interface";

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
  checkedValues:FilterInterface = {columnName:"subCategory",columnValue:[]};
@Output() subCategoryCheckedValuesEvent = new EventEmitter<typeof this.checkedValues>();

  constructor(
    private SubCategorieService: SubCategoryService,
    private storageService: StorageService,
) {
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
    return this.checkedValues.columnValue.includes(subCategoryName);
  }

  updateCheckedValues(checked: boolean, subCategoryName: string) {
    if (checked) {
      this.checkedValues.columnValue.push(subCategoryName);
      //this.categoryCheckedValuesEvent.emit(this.checkedValues);
    } else {
      const index = this.checkedValues.columnValue.indexOf(subCategoryName);
      if (index !== -1) {
        this.checkedValues.columnValue.splice(index, 1);
        //this.categoryCheckedValuesEvent.emit(this.checkedValues);
      }
    }
    //console.log(this.checkedValues); // You can remove this line, it's just for debugging
  }
}
