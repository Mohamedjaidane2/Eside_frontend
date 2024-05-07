import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FavorisCardComponent} from "../../../shared/favoris-card/favoris-card.component";
import {Router} from "@angular/router";
import {FavoritesService} from "../../../core/_services/favorites.service";
import {StorageService} from "../../../core/_services/storage.service";
import {Store} from "@ngrx/store";
import {CategoryStateInterface} from "../../../core/store/statesInterfaces/Advertisment/categoryState.interface";
import {FavortieDto} from "../../../core/models/favorites";
import {AdvertisementDto} from "../../../core/models/advertisment";
import {NgForOf} from "@angular/common";
import {ProductCardComponent} from "../../../shared/product-card/product-card.component";
import {AdsService} from "../../../core/_services/ads.service";

@Component({
  selector: 'app-mes-favoris',
  standalone: true,
  imports: [
    FavorisCardComponent,
    NgForOf,
    ProductCardComponent
  ],
  templateUrl: './mes-favoris.component.html',
  styleUrl: './mes-favoris.component.css'
})
export class MesFavorisComponent implements OnInit {
  @Output() title = new EventEmitter<string>();
  id:number=this.storageService.getUser().id;
  favorieList !: AdvertisementDto[]

  //@Output() title = new EventEmitter<(result: string) => void>();
  constructor(
    private router: Router,
    private favoritesService: FavoritesService,
    private adsService: AdsService,
    private storageService:StorageService,
    private store: Store<{ store: CategoryStateInterface }>,
  ) {
  }
  ngOnInit(): void {
    this.title.emit("Mes Favoris");
    this.adsService.getfavorites(this.id.toString()).subscribe(list => {
      this.favorieList=list;
    })
  }
}
