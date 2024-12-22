import { Routes } from '@angular/router';
import { CreateHotelComponent } from '../hotel/hotelComponents/create-hotel/create-hotel.component';
import { UserRegisterComponent } from '../user/userComponents/user-register/user-register.component';

export const routes: Routes = [
    {
        path:'register',component:UserRegisterComponent
    },
];
