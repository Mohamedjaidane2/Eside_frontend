import {Component, OnInit} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../core/_services/auth.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthActions} from "../../core/store/actions/Auth/auth.actions";

@Component({
  selector: 'app-publier-une-annonce',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    FormsModule
  ],
  templateUrl: './publier-une-annonce.component.html',
  styleUrl: './publier-une-annonce.component.css'
})
export class PublierUneAnnonceComponent implements OnInit{
  title = 'Eside-frontend';
  constructor(private authService: AuthService, private router: Router, private store: Store) {
  }

  ngOnInit(): void {

    //this.store.dispatch(AuthActions.checkAuth())
    //this.store.dispatch(AuthActions.getUserInfo())
  }
  step1 =false;
  step2 =false;
  openTab = 1;
  prix = 0;

  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }
  changeStateStep1(){
    this.step1=true;
    this.openTab=2;
  }
  changeStateStep2(){
    this.step2=true;
  }

  protected readonly parseFloat = parseFloat;
}
