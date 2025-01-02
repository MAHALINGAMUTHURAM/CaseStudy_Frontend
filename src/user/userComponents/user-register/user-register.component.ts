import { Component } from '@angular/core';
import { User } from '../../model/User';
import { UserService } from '../../userService/user.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-register',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {

  user:User=
  {
    username:'',
    password:'',
  }

  constructor(private userService:UserService,private router:Router){}

  saveUser() {
    this.userService.saveUser(this.user).subscribe(
      (response) => {
        alert(JSON.stringify(response)); 
        this.router.navigate(['user/login']);
      },
      (error) => {
        console.error('Error saving user:', error);
        alert(JSON.stringify(error));
      }
    );
  }
}
