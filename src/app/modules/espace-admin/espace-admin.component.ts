import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../core/_services/auth.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthActions} from "../../core/store/actions/Auth/auth.actions";

@Component({
  selector: 'app-espace-admin',
  standalone:true,
  templateUrl: './espace-admin.component.html',
  styleUrl: './espace-admin.component.css'
})
export class EspaceAdminComponent implements OnInit {
  title = 'Eside-frontend';

  constructor(private authService: AuthService, private router: Router, private store: Store) {
  }

  ngOnInit(): void {

    //this.store.dispatch(AuthActions.checkAuth())
    //this.store.dispatch(AuthActions.getUserInfo())
  }
}
