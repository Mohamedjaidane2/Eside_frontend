import {Component, Input, OnInit} from '@angular/core';
import {ProductCardComponent} from "../../../shared/product-card/product-card.component";
import {AdvertisementDto} from "../../../core/models/advertisment";
import {AdsService} from "../../../core/_services/ads.service";
import {Store} from "@ngrx/store";
import {AdsStateInterface} from "../../../core/store/statesInterfaces/Advertisment/adsState.interface";
import {selectFeedAds} from "../../../core/store/reducers/Advertisment/ads.reducer";
import {NgForOf, NgIf} from "@angular/common";
import {AdsActions} from "../../../core/store/actions/Advertisment/ads.actions";
import {StorageService} from "../../../core/_services/storage.service";
import {FormsModule} from "@angular/forms";
import {groupeByCategoryInterface} from "../../../shared/types/groupeByCategory.interface";
import {NgxPaginationModule} from "ngx-pagination";
import {filter} from "rxjs";
import {FilterInterface} from "../../../shared/types/filter.interface";

@Component({
  selector: 'app-display-section',
  standalone: true,
  imports: [
    ProductCardComponent,
    NgForOf,
    FormsModule,
    NgxPaginationModule,
    NgIf
  ],
  templateUrl: './display-section.component.html',
  styleUrl: './display-section.component.css'
})
export class DisplaySectionComponent implements OnInit {
  @Input() public filter!: FilterInterface[];
  feedAds: AdvertisementDto[] = [];
  filteredAds: AdvertisementDto[] = [];
  filterValue: string = '';
  page = 1;
  count = 0;
  pageSize = 8;
  sortAsc = false;
  sortDesc = false;
  pageSizes = [ 8 , 12];
  currentIndex = -1;

  constructor(
    private adsService: AdsService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    console.log("ng on init");
    this.retrieveAds();
    console.log("ng on init finish");
  }

  retrieveAds(): void {
    console.log("Retrieving ads...");
    console.log("our data from input = to "+this.filter)
    const params = this.getRequestParams(this.page, this.pageSize);
    if (!this.filter) {
      this.filter = [];
    }
    if (this.filter) {
      console.log("Filter:", this.filter);
      console.log("Params:", params);
      this.adsService.search(this.filterObjectsWithEmptyArrays(this.filter), params).subscribe(response => {
        console.log("API response:", response);
        this.feedAds = response?.advertisments || [];
        this.count = response?.totalItems || 0;
        this.filteredAds = this.feedAds || [];
      }, error => {
        console.error("Error retrieving ads:", error);
      });
    } else {
      console.warn("No filter provided.");
    }
  }

  initilizeSort(): void {
    this.sortAsc = false;
    this.sortDesc = false;
  }

  sortProductsDesc(): void {
    this.sortAsc = false;
    this.sortDesc = true;
    if (this.filteredAds) {
      this.filteredAds = [...this.filteredAds].sort((a, b) => a.price - b.price);
    }
  }

  sortProductsAsc(): void {
    this.sortAsc = true;
    this.sortDesc = false;
    if (this.filteredAds) {
      this.filteredAds = [...this.filteredAds].sort((a, b) => b.price - a.price);
    }
  }

  filterBy(): void {
    if (this.feedAds) {
      const filterValue = this.filterValue.toLowerCase().trim();
      if (filterValue) {
        this.filteredAds = this.feedAds.filter(ads => ads.title.toLowerCase().startsWith(filterValue));
      } else {
        this.filteredAds = this.feedAds;
      }
    }
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveAds();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveAds();
  }

  getRequestParams(page: number, pageSize: number): any {
    let params: any = {};
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }

  filterObjectsWithEmptyArrays(arr: any[]): any[] {
    return arr.filter(obj => Array.isArray(obj.columnValue) && obj.columnValue.length > 0);
  }

  extractFilterValues(filters: FilterInterface[]): string[] {
    if (!filters || !filters) {
      return [];
    }

    let filterValuesArray: string[] = [];

    filters.forEach(filter => {
      filterValuesArray = filterValuesArray.concat(filter.columnValue);
    });

    return filterValuesArray;
  }

}
