import {Component, Input, OnInit} from '@angular/core';
import {AdvertisementDto} from "../../core/models/advertisment";
import {AsyncPipe, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

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

  ngOnInit(): void {

  }

  scrolltop() {
    window.scrollTo({ top: 0 });
  }
}
