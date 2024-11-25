import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const AuthorizationGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const statusAuthorization = inject(UserService).isAuthenticated();

  if (statusAuthorization === true) {
    return true;
  }
  else{
    router.navigate(['/authorization']);
    return false;
  }
};
