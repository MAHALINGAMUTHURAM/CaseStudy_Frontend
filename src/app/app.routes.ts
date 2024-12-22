import { Routes } from '@angular/router';
import { CreateHotelComponent } from '../hotel/hotelComponents/create-hotel/create-hotel.component';
import { UserRegisterComponent } from '../user/userComponents/user-register/user-register.component';
import { UserLoginComponent } from '../user/userComponents/user-login/user-login.component';
import { GetallHotelComponent } from '../hotel/hotelComponents/getall-hotel/getall-hotel.component';
import { userGuard } from '../user/userGuard/user.guard';
export const routes: Routes = [
    {
        path:'user/register',component:UserRegisterComponent
    },
    {
        path:'user/login',component:UserLoginComponent
    },
    {
        path:'hotel/all',component:GetallHotelComponent,canActivate: [userGuard]
    },
];
