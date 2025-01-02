import { Component } from '@angular/core';
import { AuthenticateUser } from '../../model/AuthenticateUser';
import { UserService } from '../../userService/user.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-login',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  login:AuthenticateUser=
  {
    userName:'',
    password:'',
    role:''
  }

  token:any;

  constructor(private userService:UserService,private router:Router){}

  loginUser() {
    this.login.role="ROLE_USER"
    this.userService.loginUser(this.login).subscribe((e)=>{
    this.token=e.token;
    alert(JSON.stringify(e));
    localStorage.setItem('token',this.token);
    localStorage.setItem('role',this.login.role)
    localStorage.setItem('name',this.login.userName)
    this.router.navigate(['/home']);
    },
    (error) => {
      console.error('Error saving user:', error);
      alert(JSON.stringify(error));
    });
    }

}
