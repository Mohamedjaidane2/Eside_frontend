import { Component } from '@angular/core';
import {NavbarComponent} from "../../shared/navbar/navbar.component";
import {HeroComponent} from "./hero/hero.component";
import {NouveautesComponent} from "./nouveautes/nouveautes.component";
import {OrderCardHomeComponent} from "./order-card-home/order-card-home.component";
import {SellCardHomeComponent} from "./sell-card-home/sell-card-home.component";
import {CommentCaMarcheComponent} from "./comment-ca-marche/comment-ca-marche.component";
import {TrendyCategoryComponent} from "./trendy-category/trendy-category.component";
import {SeasonSelectionComponent} from "./season-selection/season-selection.component";
import {ClientsFeedbackComponent} from "./clients-feedback/clients-feedback.component";
import {FooterComponent} from "../../shared/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    NouveautesComponent,
    OrderCardHomeComponent,
    SellCardHomeComponent,
    CommentCaMarcheComponent,
    TrendyCategoryComponent,
    SeasonSelectionComponent,
    ClientsFeedbackComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
