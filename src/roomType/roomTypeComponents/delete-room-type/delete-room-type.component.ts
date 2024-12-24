import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RoomTypeService } from '../../roomTypeService/room-type.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-room-type',
  imports: [CommonModule],
  templateUrl: './delete-room-type.component.html',
  styleUrl: './delete-room-type.component.css'
})
export class DeleteRoomTypeComponent {

  roomTypeId: any;

    constructor(private roomTypeService: RoomTypeService, private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.roomTypeId = this.activatedRoute.snapshot.params['roomTypeId'];
        this.confirmAndDeleteRoomType(this.roomTypeId);
    }

    confirmAndDeleteRoomType(roomTypeId: number): void {
        const userConfirmed = confirm(`Are you sure you want to delete Room Type with ID ${roomTypeId}?`);

        if (userConfirmed) {
            this.roomTypeService.deleteRoomType(roomTypeId).subscribe(
                (response) => {
                    console.log(response.message); // Success message
                    alert('Room Type deleted successfully!');
                    this.router.navigate(['/roomType/roomType-details']); // Redirect to room type list or any other page
                },
                (error) => {
                    console.error('There was an error deleting the room type:', error);
                    alert('Failed to delete the Room Type. Please try again.');
                }
            );
        } else {
            this.router.navigate(['/roomType/roomType-details']); // Redirect back if user cancels
        }
    }

}
