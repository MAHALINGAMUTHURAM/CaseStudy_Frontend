import { Component } from '@angular/core';
import { HotelService } from '../../hotelService/hotel.service';
import { CommonModule } from '@angular/common';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-getall-hotel',
  imports: [CommonModule,RouterLink],
  templateUrl: './getall-hotel.component.html',
  styleUrl: './getall-hotel.component.css'
})
export class GetallHotelComponent {

  hotels: any = [];

  ngOnInit(): void {
    this.getAllHotels();
  }
  
  constructor(private hotelService: HotelService) {}
  getAllHotels() {
    this.hotelService.getAllHotels().subscribe(
      (data) => {
        this.hotels = data;
      },
      (error) => {
        console.error('Error fetching hotels', error);
      }
    );
  }

}
