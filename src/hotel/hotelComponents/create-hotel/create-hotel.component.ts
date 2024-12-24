import { Component } from '@angular/core';
import { HotelService } from '../../hotelService/hotel.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { Hotel } from '../../Hotel';

@Component({
  selector: 'app-create-hotel',
  imports: [CommonModule,FormsModule],
  templateUrl: './create-hotel.component.html',
  styleUrl: './create-hotel.component.css'
})
export class CreateHotelComponent {

  hotel:Hotel=
  {
    name:'',
    location:'',
    description:'',
  }

  constructor(private hotelService:HotelService){}

  saveHotel()
  {
    this.hotelService.saveHotel(this.hotel).subscribe((e)=>alert(e));
  }
  
}