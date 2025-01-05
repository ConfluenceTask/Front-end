import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const AdminPanelGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const statusAuthorization = inject(UserService).isAdministrator();
  return statusAuthorization || router.createUrlTree(['/main']);
};
