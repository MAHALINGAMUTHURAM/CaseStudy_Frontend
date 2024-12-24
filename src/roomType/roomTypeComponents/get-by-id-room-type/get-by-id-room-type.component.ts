import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RoomTypeService } from '../../roomTypeService/room-type.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-by-id-room-type',
  imports: [CommonModule],
  templateUrl: './get-by-id-room-type.component.html',
  styleUrl: './get-by-id-room-type.component.css'
})
export class GetByIdRoomTypeComponent {

  roomTypeDetails: any;
  roomTypeId:any
  constructor(private roomTypeService:RoomTypeService,private activatedRoute:ActivatedRoute) {
  
  
  }
  ngOnInit()
  {
    this.getRoomTypeById()
  }
  
  getRoomTypeById(): void {
    this.roomTypeId=this.activatedRoute.snapshot.params["roomTypeId"]
    this.roomTypeService.getRoomTypeById(this.roomTypeId).subscribe({
      next: (data) => {
        this.roomTypeDetails = data;
        
      },
      error: (err) => {
        alert(err);
      }
    });
  }
}
