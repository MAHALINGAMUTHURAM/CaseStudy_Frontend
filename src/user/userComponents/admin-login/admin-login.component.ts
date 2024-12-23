import { Component } from '@angular/core';
import { AuthenticateUser } from '../../model/AuthenticateUser';
import { UserService } from '../../userService/user.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-admin-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

  login:AuthenticateUser=
  {
    userName:'',
    password:'',
    role:''
  }

  token:any;

  constructor(private userService:UserService){}

  loginUser() {
    this.login.role="ROLE_ADMIN"
    this.userService.loginUser(this.login).subscribe((e)=>{
    this.token=e.token;
    alert(JSON.stringify(e));
    localStorage.setItem('token',this.token);
    localStorage.setItem('role',this.login.role)
    },
    (error) => {
      console.error('Error saving user:', error);
      alert(JSON.stringify(error));
    });
    }

}
