import { Component } from '@angular/core';
import {CategoryBarComponent} from "../category-bar/category-bar.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CategoryBarComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
