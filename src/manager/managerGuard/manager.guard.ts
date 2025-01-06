import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const managerGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const expirationTime = localStorage.getItem('tokenExpiration');
  const currentTime = new Date().getTime();

  // Check if the user has a role of 'ROLE_ADMIN' and the token is not expired
  if ((role === 'ROLE_ADMIN' || role=='ROLE_MANAGER') && token) {
    if (expirationTime && currentTime < parseInt(expirationTime)) {
      return true; // Token is valid and not expired, proceed to the protected route
    } else {
      // Token expired, clear session and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      localStorage.removeItem('name');
      localStorage.removeItem('tokenExpiration');
      router.navigate(['user/login']);
      return false; // Prevent navigation to the protected route
    }
  } else {
    // If the user does not have the correct role, redirect to the home page
    router.navigate(['home']);
    return false;
  }
  
};
