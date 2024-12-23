import { Component } from '@angular/core';
import { HotelService } from '../../hotelService/hotel.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-by-amenity-hotel',
  imports: [CommonModule],
  templateUrl: './get-by-amenity-hotel.component.html',
  styleUrl: './get-by-amenity-hotel.component.css'
})
export class GetByAmenityHotelComponent {

hotelDetails: any;
amenityId:any
constructor(private hotelService:HotelService,private activatedRoute:ActivatedRoute) {

}
ngOnInit()
{
  this.getHotelsByAmenity()
}

getHotelsByAmenity(): void {
  this.amenityId=this.activatedRoute.snapshot.params["amenityId"]
  this.hotelService.getHotelsByAmenity(this.amenityId).subscribe({
    next: (data) => {
      this.hotelDetails = data;
      
    },
    error: (err) => {
      alert(err);
    }
  });
}

}
