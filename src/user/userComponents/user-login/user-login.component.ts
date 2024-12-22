import { Component } from '@angular/core';
import { AuthenticateUser } from '../../model/AuthenticateUser';
import { UserService } from '../../userService/user.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-user-login',
  imports: [CommonModule,FormsModule],
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

  constructor(private userService:UserService){}

  loginUser() {
    this.login.role="ROLE_USER"
    this.userService.loginUser(this.login).subscribe((e)=>{
    this.token=e.token;
    alert(JSON.stringify(e));
    localStorage.setItem('token',this.token);
    },
    (error) => {
      console.error('Error saving user:', error);
      alert(JSON.stringify(error));
    });
    }

}
