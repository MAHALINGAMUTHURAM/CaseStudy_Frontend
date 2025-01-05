import { Routes } from '@angular/router';
import { CreateHotelComponent } from '../hotel/hotelComponents/create-hotel/create-hotel.component';
import { UserRegisterComponent } from '../user/userComponents/user-register/user-register.component';
import { UserLoginComponent } from '../user/userComponents/user-login/user-login.component';

import { userGuard } from '../user/userGuard/user.guard';
import { GetallHotelComponent } from '../hotel/hotelComponents/getall-hotel/getall-hotel.component';
import { GetByIdHotelComponent } from '../hotel/hotelComponents/get-by-id-hotel/get-by-id-hotel.component';
import { managerGuard } from '../manager/managerGuard/manager.guard';
import { adminGuard } from '../admin/adminGuard/admin.guard';
import { GetByAmenityHotelComponent } from '../hotel/hotelComponents/get-by-amenity-hotel/get-by-amenity-hotel.component';
import { UpdateHotelComponent } from '../hotel/hotelComponents/update-hotel/update-hotel.component';
import { DeleteHotelComponent } from '../hotel/hotelComponents/delete-hotel/delete-hotel.component';
import { CreateRoomTypeComponent } from '../roomType/roomTypeComponents/create-room-type/create-room-type.component';
import { CreateRoomComponent } from '../room/roomComponents/create-room/create-room.component';
import { Home2Component } from '../user/userComponents/home-2/home-2.component';
import { Home3Component } from '../user/userComponents/home-3/home-3.component';

import { Hotel1Component } from '../hotelpage/hotel1/hotel1.component';
import { Hotel2Component } from '../hotelpage/hotel2/hotel2/hotel2.component';
import { Home4Component } from '../user/userComponents/home-4/home-4.component';
import { Home1Component } from '../user/userComponents/home-1/home-1.component';
import { Home1ReviewComponent } from '../user/userComponents/home-1-review/home-1-review.component';
import { Home1BlogComponent } from '../user/userComponents/home-1-blog/home-1-blog.component';
import { Home1AboutUsComponent } from '../user/userComponents/home-1-about-us/home-1-about-us.component';
import { Home1GalleryComponent } from '../user/userComponents/home-1-gallery/home-1-gallery.component';
import { Home1ContactComponent } from '../user/userComponents/home-1-contact/home-1-contact.component';
import { AdminDashboardComponent } from '../admin/adminComponents/admin-dashboard/admin-dashboard.component';
import { ManagerLoginComponent } from '../manager/managerComponents/manager-login/manager-login.component';
import { AdminLoginComponent } from '../admin/adminComponents/admin-login/admin-login.component';
import { AmenityComponent } from '../amenityComponents/amenity.component';
import { PaymentComponent } from '../paymentComponents/payment.component';
export const routes: Routes = [
    {
        path:'user/register',component:UserRegisterComponent
    },
    {
        path:'user/login',component:UserLoginComponent
    },
    {
        path:'manager/login',component:ManagerLoginComponent
    },
    {
        path:'admin/login',component:AdminLoginComponent
    },
    {
        path:'hotel/create',component:CreateHotelComponent,canActivate: [managerGuard]
    },
    {
        path:'hotel/all',component:GetallHotelComponent,canActivate: [userGuard]
    },
    {
        path:'hotel/hotel-details/:hotelId',component:Home3Component,canActivate: [userGuard]
    },
    {
        path:'hotel/:amenityId',component:GetByAmenityHotelComponent,canActivate: [userGuard]
    },
    { 
        path: 'hotel/update/:hotelId', component:UpdateHotelComponent,canActivate:[managerGuard]
    },
    { 
        path: 'hotel/delete/:hotelId', component:DeleteHotelComponent,canActivate:[managerGuard]
    },
    { 
        path: 'room', component:CreateRoomComponent,canActivate:[userGuard]
    },
    { 
        path: 'area', component:Home2Component,canActivate:[userGuard]
    },
    { 
        path: 'amenity', component:AmenityComponent,canActivate:[managerGuard]
    },
    { 
        path: 'home1', component:Hotel1Component,canActivate:[adminGuard]
    },
    { 
        path: 'managerDashboard', component:Hotel2Component,canActivate:[managerGuard]
    },
    { 
        path: 'payment', component:Home4Component,canActivate:[userGuard]
    },
    { 
        path: 'manager/payment', component:PaymentComponent,canActivate:[managerGuard]
    },
    { 
        path: 'reviews', component:Home1ReviewComponent
    },
    { 
        path: 'home', component:Home1Component
    },
    { 
        path: 'blogs', component:Home1BlogComponent
    },
    { 
        path: 'aboutUs', component:Home1AboutUsComponent
    },
    { 
        path: 'gallery', component:Home1GalleryComponent
    },
    { 
        path: 'contact', component:Home1ContactComponent
    },
    { 
        path: 'adminDashboard', component:AdminDashboardComponent,canActivate:[adminGuard]
    },


];
