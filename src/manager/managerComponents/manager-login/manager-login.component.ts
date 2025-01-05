import { Component } from '@angular/core';
import { AuthenticateUser } from '../../../user/model/AuthenticateUser';
import { UserService } from '../../../user/userService/user.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-manager-login',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './manager-login.component.html',
  styleUrl: './manager-login.component.css'
})
export class ManagerLoginComponent {

  login:AuthenticateUser=
  {
    userName:'',
    password:'',
    role:''
  }

  token:any;

  constructor(private userService:UserService,private router:Router){}

  loginUser() {
    this.login.role="ROLE_MANAGER"
    console.log(this.login);
    this.userService.loginUser(this.login).subscribe((e)=>{
    this.token=e.token;
    alert(JSON.stringify(e));
    localStorage.setItem('token',this.token);
    localStorage.setItem('role',this.login.role)
    localStorage.setItem('name',this.login.userName+' manager')
    this.router.navigate(['/managerDashboard']);
    },
    (error) => {
      console.error('Error saving user:', error);
      alert(JSON.stringify(error));
    });
    }

}
