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
  @Input() public filter!: FilterInterface ;
  feedAds!: AdvertisementDto[] | null
  filterValue: string = ''; // Property to hold the filter value
  filteredAds: AdvertisementDto[] = []; // Filtered ads to display
  userAccountId:string=this.storageService.getUser().accountId
  categories: groupeByCategoryInterface[] = [];
  page = 1;
  count = 0;
  pageSize = 2;
  sortAsc=false;
  sortDesc=false;
  pageSizes = [1,5, 10];
  currentIndex = -1;

  extractFilterValues(filters: FilterInterface): string[] {
    let filterValuesArray: string[] = [];

    filters.filter.forEach(filter => {
      filterValuesArray = filterValuesArray.concat(filter.filterValues);
    });

    console.log("filterValuesArray"+filterValuesArray);
    return filterValuesArray;
  }


  constructor(
    private adsService: AdsService,
    private storageService:StorageService,
    //private store: Store<{ store: AdsStateInterface }>) {
    //this.store.select(selectFeedAds).subscribe(res => {
      //this.feedAds = res!.advertisments;
      // Initialize filteredAds with feedAds
      //this.filteredAds = this.feedAds || [];
    //}
    ){}

  ngOnInit(): void {
    this.retrieveTutorials();
    //const params = this.getRequestParams(this.page, this.pageSize);
    //this.store.dispatch(AdsActions.getAds({accountId:this.userAccountId,params:params}))
  }


retrieveTutorials(): void {
  const params = this.getRequestParams( this.page, this.pageSize);
  //this.store.dispatch(AdsActions.getAds({accountId:this.userAccountId,params:params}))
  //this.store.select(selectFeedAds).subscribe(response => {
  //  this.feedAds = response!.advertisments;
  //  this.count=response!.totalItems;
    // Initialize filteredAds with feedAds
   // this.filteredAds = this.feedAds || [];
  //});
  this.adsService.getAllAdsByAccountId(this.userAccountId,params).subscribe(response => {
    this.feedAds = response!.advertisments;
    this.count=response!.totalItems;
    // Initialize filteredAds with feedAds
    this.filteredAds = this.feedAds || [];
  });
}
  initilizesort() {
    this.sortAsc=false
    this.sortDesc=false
  }
  public sortProductsDesc(): void {
    this.sortAsc=false
    this.sortDesc=true
    if (this.filteredAds) {
      // Check if feedAds is not null
      this.filteredAds = [...this.filteredAds].sort((a, b) => a.price - b.price);
      //console.info("this.feedAds Des = " + this.feedAds);
    }
  }

  public sortProductsAsc() {
    this.sortAsc=true
    this.sortDesc=false
    if (this.filteredAds) {
      // Check if feedAds is not null
      this.filteredAds = [...this.filteredAds].sort((a, b) => b.price - a.price);
      //console.info("this.feedAds ASC = " + this.feedAds);
    }
  }

  filterBy() {
    if (this.feedAds) {
      // Convert filter value to lowercase for case-insensitive comparison
      const filterValue = this.filterValue.toLowerCase().trim();
      if (filterValue) {
        // Filter ads based on title and category, ignoring case
        this.filteredAds = this.feedAds.filter(ads =>
          ads.title.toLowerCase().startsWith(filterValue)
          //ads.product.categoryName.toLowerCase().startsWith(filterValue) ||
          //ads.product.subcategoryName.toLowerCase().startsWith(filterValue)
        );
      } else {
        // If input is empty, show all ads
        this.filteredAds = this.feedAds;
      }
    }
  }

  showGroup() {
    //First, group the products by category
    const group = this.filteredAds.reduce((acc: any, curr) => {
      let key = curr.product.categoryName;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(curr);
      return acc;
    }, {});

    //Get the categories and product related.
    this.categories = Object.keys(group ).map(key => ({
      category: key,
      advertisment: group[key]
    }));
//console.log('categories = '+this.categories[1].advertisment)
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveTutorials();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveTutorials();
  }
  getRequestParams( page: number, pageSize: number): any {
    let params: any = {};

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }


  protected readonly console = console;
}
