import { Component } from '@angular/core';
import { User } from '../../User';
import { UserService } from '../../userService/user.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-user-register',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {

  user:User=
  {
    username:'',
    password:'',
  }

  constructor(private userService:UserService){}

  saveUser()
  {
    this.userService.saveUser(this.user).subscribe((e)=>alert(e));
  }

}
