import { Component } from '@angular/core';
import { RoomType } from '../../roomType';
import { RoomTypeService } from '../../roomTypeService/room-type.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-create-room-type',
  imports: [CommonModule,FormsModule],
  templateUrl: './create-room-type.component.html',
  styleUrl: './create-room-type.component.css'
})
export class CreateRoomTypeComponent {

   roomType:RoomType=
    {
      typeName:'',
      description:'',
      maxOccupancy:0,
      pricePerNight:0.0

    }
  
    constructor(private roomTypeService:RoomTypeService){}
  
    saveRoomType()
    {
      this.roomTypeService.saveRoomType(this.roomType).subscribe((e)=>alert(e));
    }
}
