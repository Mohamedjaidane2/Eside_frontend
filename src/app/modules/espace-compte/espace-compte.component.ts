import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {StorageService} from "../../core/_services/storage.service";

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
  constructor( private router: Router,private storageService : StorageService) { }
  logout(){
    this.storageService.delete_user_token();
    this.router.navigate(['/']);
  }

}
