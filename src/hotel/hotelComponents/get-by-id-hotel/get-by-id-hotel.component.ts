import { Component } from '@angular/core';
import { HotelService } from '../../hotelService/hotel.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-get-by-id-hotel',
  imports: [CommonModule],
  templateUrl: './get-by-id-hotel.component.html',
  styleUrl: './get-by-id-hotel.component.css'
})
export class GetByIdHotelComponent {

hotelDetails: any;
hotelId:any
constructor(private hotelService:HotelService,private activatedRoute:ActivatedRoute) {}

ngOnInit()
{
  this.getHotelById()
}

getHotelById(): void {
  this.hotelId=this.activatedRoute.snapshot.params["hotelId"]
  this.hotelService.getHotelById(this.hotelId).subscribe({
    next: (data) => {
      this.hotelDetails = data;
      
    },
    error: (err) => {
      alert(err);
    }
  });
}

}
