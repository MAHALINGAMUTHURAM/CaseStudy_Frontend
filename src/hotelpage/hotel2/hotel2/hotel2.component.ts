import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Room } from '../../../room/room';
import { RoomService } from '../../../room/roomService/room.service';
@Component({
  selector: 'app-hotel2',
  imports: [CommonModule, FormsModule],
  templateUrl: './hotel2.component.html',
  styleUrls: ['./hotel2.component.css']
})
export class Hotel2Component implements OnInit {

  rooms: Room[] = []; // List of rooms
  reservedRooms: Room[] = []; // Filtered reserved rooms
  selectedRoom: Room | null = null; // Currently selected room for editing
  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.getAllRooms(); // Fetch all rooms on component initialization
  }

  // Fetch all rooms
  getAllRooms(): void {
    this.roomService.getAllRooms().subscribe({
      next: (data) => {
        this.rooms = data;
        this.filterReservedRooms(); // Filter for reserved rooms
      },
      error: (err) => {
        console.error('Error fetching rooms', err);
      }
    });
  }

  // Filter reserved rooms
  filterReservedRooms(): void {
    this.reservedRooms = this.rooms.filter(room => !room.available);
  }

  // Delete a room
  deleteRoom(roomId: number): void {
    if (confirm('Are you sure you want to delete this room?')) {
      this.roomService.deleteRoom(roomId).subscribe({
        next: (response) => {
          console.log('Room deleted successfully', response);
          this.getAllRooms(); // Refresh the list
        },
        error: (err) => {
          console.error('Error deleting room', err);
        }
      });
    }
  }
}
