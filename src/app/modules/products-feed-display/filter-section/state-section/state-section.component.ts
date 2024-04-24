import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ColorEnum, ProductStatusEnum} from "../../../../core/models/GlobalEnums";

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
  checkedValues = {
    filtername: "colors",
    filterValues: [] as string[]
  };

  @Output() etatCheckedValuesEvent = new EventEmitter<typeof this.checkedValues>();
  constructor() {
    this.checkedValues = {
      filtername: "etat",
      filterValues: [] as string[]
    };
  }

  etatData: string[] = Object.values(ProductStatusEnum).filter(value => typeof value === 'string');
  isChecked(etatName: string): boolean {
    return this.checkedValues.filterValues.includes(etatName);
  }
  updateCheckedValues(checked: boolean, etatName: string) {
    if (checked) {
      this.checkedValues.filterValues.push(etatName);
      //this.categoryCheckedValuesEvent.emit(this.checkedValues);
    } else {
      const index = this.checkedValues.filterValues.indexOf(etatName);
      if (index !== -1) {
        this.checkedValues.filterValues.splice(index, 1);
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
