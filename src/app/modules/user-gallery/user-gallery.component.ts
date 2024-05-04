import {Component, OnInit} from '@angular/core';
import {UpperGallerySectionComponent} from "./upper-gallery-section/upper-gallery-section.component";
import {ProductCardComponent} from "../../shared/product-card/product-card.component";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {AdsService} from "../../core/_services/ads.service";
import {AccountService} from "../../core/_services/account.service";
import {AdvertisementDto} from "../../core/models/advertisment";
import {NgForOf} from "@angular/common";
import {AccountDto} from "../../core/models/account";

@Component({
  selector: 'app-user-gallery',
  standalone: true,
  imports: [
    UpperGallerySectionComponent,
    ProductCardComponent,
    NgForOf
  ],
  templateUrl: './user-gallery.component.html',
  styleUrl: './user-gallery.component.css'
})
export class UserGalleryComponent implements OnInit{
  id: string | null = null;
  gallery : AdvertisementDto[] = [];
  owner!: AccountDto;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adsService: AdsService,
    private accountService: AccountService,
    ) {}
  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.subscribeToRouteParams();
  }
  private subscribeToRouteParams(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.handleRouteParams(params);
    });
  }

  private handleRouteParams(params: ParamMap): void {
    if (params.has('id')) {
      this.id = params.get('id');
      this.loadAdsById();
      console.log('Received id:', this.id);
    } else {
      console.error("'id' parameter is not provided in the route.");
    }
  }

  loadAdsById(): void {
    if (!this.id) return;
    this.adsService.getGallery(this.id!).pipe(
      switchMap(advertismentlist => {
        this.gallery = advertismentlist;
        return this.accountService.getAccountId(parseInt(this.id!));
      })
    ).subscribe(owner => {
      this.owner = owner;
    });
  }

}
