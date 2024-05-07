import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {AuthService} from "../../core/_services/auth.service";
import {Store} from "@ngrx/store";
import {CategoryStateInterface} from "../../core/store/statesInterfaces/Advertisment/categoryState.interface";
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

  spaceName:string="Mon compte"
  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr : ChangeDetectorRef,
    private store: Store<{ store: CategoryStateInterface }>,
  ) {
  }
  setSpaceName(data: any) {
    data.title.subscribe((res:any)=>{
      this.spaceName=res
      this.cdr.detectChanges();
    })
  }
  ngOnInit(): void {
    this.store.dispatch(AuthActions.checkAuth())
    let token = localStorage.getItem("token");
    if(token!==null){
      this.store.dispatch(AuthActions.getUserInfo({token:token}))
    }
  }

  logout(){
  }

}
