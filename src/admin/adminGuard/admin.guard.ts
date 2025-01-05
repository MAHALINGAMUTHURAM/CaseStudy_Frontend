import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const role= localStorage.getItem('role');

  if (role=='ROLE_ADMIN') {
    return true;
  } else {
    router.navigate(['home']);
    return false;
  }
  
};