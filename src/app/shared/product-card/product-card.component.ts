import {Component, Input, OnInit} from '@angular/core';
import {AdvertisementDto} from "../../core/models/advertisment";
import {AsyncPipe, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {Store} from "@ngrx/store";
import {CategoryStateInterface} from "../../core/store/statesInterfaces/Advertisment/categoryState.interface";
import {AuthActions} from "../../core/store/actions/Auth/auth.actions";
import {FavoritesService} from "../../core/_services/favorites.service";
import {StorageService} from "../../core/_services/storage.service";
import {NewFavoriteDto} from "../../core/models/favorites";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    RouterLink
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit{
  @Input() public ad!: AdvertisementDto ;
  favoriteSelected =false
  id:number=this.storageService.getUser().id;
  favoriteNewDto =new NewFavoriteDto;

  constructor(
    private router: Router,
    private favoritesService: FavoritesService,
    private storageService:StorageService,
    private store: Store<{ store: CategoryStateInterface }>,
  ) {
  }
  ngOnInit(): void {
    this.favoriteNewDto.accountId=this.id
    this.favoriteNewDto.advertismentId=this.ad.id
    this.favoritesService.isSelected(this.favoriteNewDto).subscribe(isSelected => {
    this.favoriteSelected=isSelected;
    })
  }

  scrolltop() {
    window.scrollTo({ top: 0 });
  }

  addToFavorite() {
    this.favoriteSelected=true
    this.store.dispatch(AuthActions.checkAuth())
    let token = localStorage.getItem("token");
    if(token!==null){
      this.store.dispatch(AuthActions.getUserInfo({token:token}))
    }
    this.favoritesService.create(this.favoriteNewDto).subscribe(response => {
      console.log(response)
    })
  }
  removeFromFavorite() {
    this.favoriteSelected=false
    this.store.dispatch(AuthActions.checkAuth())
    let token = localStorage.getItem("token");
    if(token!==null){
      this.store.dispatch(AuthActions.getUserInfo({token:token}))
    }

    this.favoritesService.deleteFromFavorite(this.favoriteNewDto).subscribe(response => {
      console.log(response)
    })
  }
}
//<img class="cursor-pointer" src="assets/svg's/heart-selected.svg"/>
