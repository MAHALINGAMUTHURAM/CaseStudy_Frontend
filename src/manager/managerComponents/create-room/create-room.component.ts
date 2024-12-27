import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RoomService } from '../../../room/roomService/room.service';

@Component({
  selector: 'app-create-room',
  imports: [],
  templateUrl: './create-room.component.html',
  styleUrl: './create-room.component.css'
})

export class CreateRoomComponent {
  formVisible = false;

  room = {
    roomId: '',
    roomNumber: '',
    roomType: '',
    roomLocation: '',
    roomAvailable: false  
  };

  constructor(private roomService: RoomService,private http: HttpClient) {}

  toggleForm(): void {
    this.formVisible = !this.formVisible;
  }

  
  saveRoom(): void {
    this.roomService.saveRoom(this.room).subscribe({
      next: (response: any) => {
        console.log('Room added successfully:', response);
        alert('Room added successfully!');
        this.resetForm();  
      },
      error: (err) => {
        console.error('Error adding room:', err);
        alert('Failed to add the room. Please try again.');
      }
    });
  }

  resetForm(): void {
    this.room = {
      roomId: '',
      roomNumber: '',
      roomType: '',
      roomLocation: '',
      roomAvailable: false
    };
    this.formVisible = false; 
  }
}