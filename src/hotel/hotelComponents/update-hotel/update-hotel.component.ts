import { Component } from '@angular/core';
import { Hotel } from '../../Hotel';
import { HotelService } from '../../hotelService/hotel.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-update-hotel',
  imports: [CommonModule,FormsModule],
  templateUrl: './update-hotel.component.html',
  styleUrl: './update-hotel.component.css'
})
export class UpdateHotelComponent {

  hotel:Hotel=
  {
    name:'',
    location:'',
    description:'',
    area:{
      name:''
    }
  }

  hotelId: any;

  constructor(private hotelService:HotelService,private activatedRoute:ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    this.hotelId=this.activatedRoute.snapshot.params["hotelId"]
    this.fetchHotelDetails(this.hotelId);
  }

  fetchHotelDetails(hotelId: number): void {

    this.hotelService.getHotelById(this.hotelId).subscribe({
      next: (data) => {
        this.hotel = data;
        
      },
      error: (err) => {
        alert(err);
      }
    });
}

updateHotel(): void {
  this.hotelService.updateHotel(this.hotelId, this.hotel).subscribe(
    (response) => {
      console.log(response.message); // Success message
      // Redirect to hotel details page or any other page
      this.router.navigate(['/hotel/hotel-details', this.hotelId]);
    },
    (error) => {
      console.error('There was an error updating the hotel:', error);
    }
  );
}
}
