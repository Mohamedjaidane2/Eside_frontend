import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {AuthService} from "../../core/_services/auth.service";
import {Store} from "@ngrx/store";

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
    private store: Store,
    private cdr : ChangeDetectorRef,
  ) {
  }
  setSpaceName(data: any) {
    data.title.subscribe((res:any)=>{
      this.spaceName=res
      this.cdr.detectChanges();
    })
  }
  ngOnInit(): void {

  }

  logout(){
  }

}
