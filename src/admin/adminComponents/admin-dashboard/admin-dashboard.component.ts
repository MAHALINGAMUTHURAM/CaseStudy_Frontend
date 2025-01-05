import { Component } from '@angular/core';
import { UserService } from '../../../user/userService/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule,RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  roles:any[]=[];
  showUser:boolean=false;
  showManager:boolean=false;
  constructor(private userService:UserService){}

  // ngOnInit(): void {
  //   this.getRoleUsers();
  // }
  // getRoleUsers(): void {

  // }
  showUserList()
  {
    this.userService.getRoleByName('ROLE_USER').subscribe(
      (data) => {
        this.showUser= true;
        this.showManager= false;
        this.roles = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }
  showManagerList()
  {
    this.userService.getRoleByName('ROLE_MANAGER').subscribe(
      (data) => {
        this.showManager= true;
        this.showUser= false;
        this.roles = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }
  makeManager(userId:any)
  {
    this.userService.makeUserManager(userId).subscribe(
      (data) => {
        //this.showUser= true;
        //this.roles = data;
        console.error(data);
      },
      (error) => {
        alert(JSON.stringify(error));
      }
    );
  }

}
