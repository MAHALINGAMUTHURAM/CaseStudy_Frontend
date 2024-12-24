import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoomType } from '../../roomType';
import { RoomTypeService } from '../../roomTypeService/room-type.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-room-type',
  imports: [CommonModule,FormsModule],
  templateUrl: './update-room-type.component.html',
  styleUrl: './update-room-type.component.css'
})
export class UpdateRoomTypeComponent {

    roomType:RoomType=
    {
      typeName:'',
      description:'',
      maxOccupancy:0,
      pricePerNight:0.0
    }
  
    roomTypeId: any;
  
    constructor(private roomTypeService:RoomTypeService,private activatedRoute:ActivatedRoute,private router: Router) {}
  
    ngOnInit(): void {
      this.roomTypeId=this.activatedRoute.snapshot.params["roomTypeId"]
      this.fetchRoomTypeDetails(this.roomTypeId);
    }
  
    fetchRoomTypeDetails(roomTypeId: number): void {
  
      this.roomTypeService.getRoomTypeById(this.roomTypeId).subscribe({
        next: (data) => {
          this.roomType = data;
          
        },
        error: (err) => {
          alert(err);
        }
      });
  }
  
  updateRoomType(): void {
    this.roomTypeService.updateRoomType(this.roomTypeId, this.roomType).subscribe(
      (response) => {
        console.log(response.message); // Success message
        // Redirect to hotel details page or any other page
        this.router.navigate(['/roomType/roomType-details', this.roomTypeId]);
      },
      (error) => {
        console.error('There was an error updating the roomType:', error);
      }
    );
  }
}
