import { Component } from '@angular/core';
import { HotelService } from '../../hotelService/hotel.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-delete-hotel',
  imports: [],
  templateUrl: './delete-hotel.component.html',
  styleUrl: './delete-hotel.component.css'
})
export class DeleteHotelComponent {


hotelId:any

ngOnInit()
{
  this.deleteHotel();
}

constructor(private hotelService:HotelService,private activatedRoute:ActivatedRoute) {}
  deleteHotel():void
  {
    this.hotelId=this.activatedRoute.snapshot.params["hotelId"]
    this.hotelService.deleteHotel(this.hotelId).subscribe((e)=>alert(e));
  }

}
