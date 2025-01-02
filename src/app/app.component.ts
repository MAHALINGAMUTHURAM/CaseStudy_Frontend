import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  name:any;
  isAuthenticated()
  {
    if(localStorage.getItem('token'))
    {
      this.name=localStorage.getItem('name');
      return true;
    }
    else
    {
      return false;
    }
  }
  logout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    this.router.navigate(['user/login']);
  }

  showNavbar: boolean = false;
  
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Listen to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Check the current route's path
      const currentRoute = this.router.url; // full URL
      console.log(currentRoute); // Log for debugging

      if (currentRoute === '/user/register' || currentRoute === '/user/login') {
        this.showNavbar = false;
      } else {
        this.showNavbar = true;
      }
    });
  }
  
}
