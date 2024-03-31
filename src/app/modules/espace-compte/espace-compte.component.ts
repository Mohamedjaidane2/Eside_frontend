import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-espace-compte',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './espace-compte.component.html',
  styleUrl: './espace-compte.component.css'
})
export class EspaceCompteComponent {

}
