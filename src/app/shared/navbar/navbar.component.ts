import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CategoryDto} from "../../core/models/category";
import {CategoryService} from "../../core/_services/category.service";
import {Store} from "@ngrx/store";
import {CategoryStateInterface} from "../../core/store/statesInterfaces/Advertisment/categoryState.interface";
import {selectListCategories} from "../../core/store/reducers/Advertisment/category.reducer";
import {CategoryActions} from "../../core/store/actions/Advertisment/category.action";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements  OnInit{
  categories: CategoryDto[] = [];
  constructor(
    private categoryService: CategoryService,
    private store: Store<{store:CategoryStateInterface}>) {
    this.store.select(selectListCategories).subscribe(catList => this.categories = catList);
  }
  //console.log("data first =" +data.map())
  ngOnInit(): void {
    this.store.dispatch(CategoryActions.getAll())
  }

}
