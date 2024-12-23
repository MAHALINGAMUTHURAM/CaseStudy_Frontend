import { Routes } from '@angular/router';
import { CreateHotelComponent } from '../hotel/hotelComponents/create-hotel/create-hotel.component';
import { UserRegisterComponent } from '../user/userComponents/user-register/user-register.component';
import { UserLoginComponent } from '../user/userComponents/user-login/user-login.component';

import { userGuard } from '../user/userGuard/user.guard';
import { GetallHotelComponent } from '../hotel/hotelComponents/getall-hotel/getall-hotel.component';
import { GetByIdHotelComponent } from '../hotel/hotelComponents/get-by-id-hotel/get-by-id-hotel.component';
import { managerGuard } from '../user/managerGuard/manager.guard';
import { adminGuard } from '../user/adminGuard/admin.guard';
import { GetByAmenityHotelComponent } from '../hotel/hotelComponents/get-by-amenity-hotel/get-by-amenity-hotel.component';
import { UpdateHotelComponent } from '../hotel/hotelComponents/update-hotel/update-hotel.component';
import { DeleteHotelComponent } from '../hotel/hotelComponents/delete-hotel/delete-hotel.component';
export const routes: Routes = [
    {
        path:'user/register',component:UserRegisterComponent
    },
    {
        path:'user/login',component:UserLoginComponent
    },
    {
        path:'hotel/create',component:CreateHotelComponent,canActivate: [managerGuard,adminGuard]
    },
    {
        path:'hotel/all',component:GetallHotelComponent,canActivate: [userGuard]
    },
    {
        path:'hotel/hotel-details/:hotelId',component:GetByIdHotelComponent,canActivate: [userGuard]
    },
    {
        path:'hotel/:amenityId',component:GetByAmenityHotelComponent,canActivate: [userGuard]
    },
    { 
        path: 'hotel/update/:hotelId', component:UpdateHotelComponent,canActivate:[userGuard]
    },
    { 
        path: 'hotel/delete/:hotelId', component:DeleteHotelComponent,canActivate:[userGuard]
    },

];
