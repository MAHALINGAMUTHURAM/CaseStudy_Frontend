import { Component } from '@angular/core';
import { AuthenticateUser } from '../../../user/model/AuthenticateUser';
import { UserService } from '../../../user/userService/user.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  imports: [CommonModule,FormsModule,RouterLink],
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

  constructor(private userService:UserService,private router:Router){}

  loginUser() {

    const expirationTime = new Date().getTime() + (60 * 60 * 1000);

    this.login.role="ROLE_ADMIN"
    this.userService.loginUser(this.login).subscribe((e)=>{
    this.token=e.token;
    //alert(JSON.stringify(e));
    localStorage.setItem('token',this.token);
    localStorage.setItem('role',this.login.role)
    localStorage.setItem('name',this.login.userName+' Admin')
    localStorage.setItem('tokenExpiration', expirationTime.toString());
    this.router.navigate(['/adminDashboard']);
    },
    (error) => {
      console.error('Error saving user:', error);
      alert(JSON.stringify(error));
    });
    }

}
