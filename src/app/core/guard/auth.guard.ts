import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {StorageService} from "../_services/storage.service";
import {AuthService} from "../_services/auth.service";

// export const authGuard: CanActivateFn = () => {
//   const authService = inject(AuthService)
//   const router = inject(Router)
//   if(authService.isTokenNotValid()){
//     console.log("token not valid")
//     router.navigate(["connexion"]);
//     return false
//   }
//   console.log("token is valid")
//   return true;
// };
