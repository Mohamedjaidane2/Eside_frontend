import {Component, OnInit} from '@angular/core';
import {
  RecivedDiscountRequestComponent
} from "../espace-compte/mes-offre-de-reductions/recived-discount-request/recived-discount-request.component";
import {
  SendedDiscountRequestComponent
} from "../espace-compte/mes-offre-de-reductions/sended-discount-request/sended-discount-request.component";
import {AsyncPipe, NgClass} from "@angular/common";
import {SeConnecterComponent} from "./se-connecter/se-connecter.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {AuthService} from "../../core/_services/auth.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthActions} from "../../core/store/actions/Auth/auth.actions";

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    RecivedDiscountRequestComponent,
    SendedDiscountRequestComponent,
    NgClass,
    SeConnecterComponent,
    InscriptionComponent,
    AsyncPipe
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private store: Store) {
  }

  openTab = 1;

  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

  ngOnInit(): void {

    /*
    this.authService.checkAuth().subscribe({
      next:res =>{
        if (res){
          this.router.navigate(['/mon-compte/mes-infos']);
        }else {
          this.router.navigate(['/']);
        }
      },
      error : err =>{
      this.router.navigate(['/']);
    }
    })
  }
     */
  }

}
