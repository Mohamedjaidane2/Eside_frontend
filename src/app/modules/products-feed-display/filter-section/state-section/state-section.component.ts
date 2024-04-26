import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ColorEnum, ProductStatusEnum} from "../../../../core/models/GlobalEnums";
import {FilterInterface} from "../../../../shared/types/filter.interface";

@Component({
  selector: 'app-state-section',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './state-section.component.html',
  styleUrl: './state-section.component.css'
})
export class StateSectionComponent implements OnInit {
  checkedValues:FilterInterface={columnName:"productStatus",columnValue:[]};

  @Output() etatCheckedValuesEvent = new EventEmitter<typeof this.checkedValues>();
  constructor() {
  }

  etatData: string[] = Object.values(ProductStatusEnum).filter(value => typeof value === 'string');
  isChecked(etatName: string): boolean {
    return this.checkedValues.columnValue.includes(etatName);
  }
  updateCheckedValues(checked: boolean, etatName: string) {
    if (checked) {
      this.checkedValues.columnValue.push(etatName);
      //this.categoryCheckedValuesEvent.emit(this.checkedValues);
    } else {
      const index = this.checkedValues.columnValue.indexOf(etatName);
      if (index !== -1) {
        this.checkedValues.columnValue.splice(index, 1);
        //this.categoryCheckedValuesEvent.emit(this.checkedValues);
      }
    }
    console.log(this.checkedValues); // You can remove this line, it's just for debugging
  }

  ngOnInit(): void {
    //this.isChecked = Array(this.colorsData.length).fill(false);
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.etatCheckedValuesEvent.emit(this.checkedValues);
    });
  }
}
