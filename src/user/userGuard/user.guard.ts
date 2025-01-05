import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const role= localStorage.getItem('role');

  if (token && (role=='ROLE_MANAGER' || role=='ROLE_ADMIN'|| role=='ROLE_USER')) {
    return true;
  } else {
    router.navigate(['user/login']);
    return false;
  }
  
};
