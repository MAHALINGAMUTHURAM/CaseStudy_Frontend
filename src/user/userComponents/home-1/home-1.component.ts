import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home-1',
  imports: [RouterLink,CommonModule],
  templateUrl: './home-1.component.html',
  styleUrl: './home-1.component.css'
})
export class Home1Component {
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

}
