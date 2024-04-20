import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {StorageService} from "../../core/_services/storage.service";
import {AuthService} from "../../core/_services/auth.service";
import {Store} from "@ngrx/store";
import {AuthActions} from "../../core/store/actions/Auth/auth.actions";

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
export class EspaceCompteComponent implements OnInit{
  title = 'Eside-frontend';
  constructor(private authService: AuthService, private router: Router, private store: Store) {
  }

  ngOnInit(): void {

    //this.store.dispatch(AuthActions.checkAuth())
    //this.store.dispatch(AuthActions.getUserInfo())
  }

  logout(){
  }

}
