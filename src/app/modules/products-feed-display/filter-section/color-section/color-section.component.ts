import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ColorEnum } from "../../../../core/models/GlobalEnums";
import {NgClass, NgForOf} from "@angular/common";
import {FilterInterface} from "../../../../shared/types/filter.interface";

@Component({
  selector: 'app-color-section',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    NgForOf,
  ],
  templateUrl: './color-section.component.html',
  styleUrls: ['./color-section.component.css'] // Changed styleUrl to styleUrls
})
export class ColorSectionComponent implements OnInit {
  checkedValues:FilterInterface = {columnName:"color",columnValue:[]};

  @Output() colorsCheckedValuesEvent = new EventEmitter<typeof this.checkedValues>();
  constructor() {}

  colorsData: string[] = Object.values(ColorEnum).filter(value => typeof value === 'string');
  isChecked(colorName: string): boolean {
    return this.checkedValues.columnValue.includes(colorName);
  }
  updateCheckedValues(checked: boolean, colorName: string) {
    if (checked) {
      this.checkedValues.columnValue.push(colorName);
      //this.categoryCheckedValuesEvent.emit(this.checkedValues);
    } else {
      const index = this.checkedValues.columnValue.indexOf(colorName);
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
      this.colorsCheckedValuesEvent.emit(this.checkedValues);
    });
  }
}
