import {Component, Input, OnInit} from '@angular/core';
import {AdvertisementDto} from "../../core/models/advertisment";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit{
  @Input() public ad!: AdvertisementDto ;

  productDate:AdvertisementDto=this.ad;

  ngOnInit(): void {

  }

}
