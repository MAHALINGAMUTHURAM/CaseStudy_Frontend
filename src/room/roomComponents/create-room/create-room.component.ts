import { Component } from '@angular/core';
import { Room } from '../../room';
import { RoomService } from '../../roomService/room.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-create-room',
  imports: [CommonModule,FormsModule],
  templateUrl: './create-room.component.html',
  styleUrl: './create-room.component.css'
})
export class CreateRoomComponent {

  rooms: Room[] = [];  // Array to hold all rooms
  room: Room = { roomId: 0, roomNumber: 0, roomtype: {      typeName:'',
  description:'',
  maxOccupancy:0,
  pricePerNight:0.0 }, location: '', available: true };
  availableRooms: Room[] = [];
  roomId: number = 0;
  roomTypeId: number = 0;
  location: string = '';
  amenityId: number = 0;
  taskId: number = 0;

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.loadAllRooms();  // Load all rooms when component initializes
  }

  // Get all rooms
  loadAllRooms(): void {
    this.roomService.getAllRooms().subscribe((rooms: Room[]) => {
      this.rooms = rooms;
    });
  }

  // Get room by ID
  loadRoomById(): void {
    if (this.roomId) {
      this.roomService.getRoomById(this.roomId).subscribe((room: Room) => {
        this.room = room;
      });
    } else {
      alert('Please provide a valid Room ID.');
    }
  }

  // Create a new room
  createRoom(): void {
    if (this.room.roomNumber && this.room.location && this.room.roomtype) {
      this.roomService.saveRoom(this.room).subscribe((newRoom: Room) => {
        alert('Room created successfully!');
        this.loadAllRooms();  // Reload rooms after creation
      }, error => {
        alert('Error creating room: ' + error.message);
      });
    } else {
      alert('Please fill in all room details.');
    }
  }

  // Update a room's details
  updateRoomDetails(): void {
    if (this.room.roomId) {
      this.roomService.updateRoom(this.room.roomId, this.room).subscribe((updatedRoom: Room) => {
        alert('Room updated successfully!');
        this.loadAllRooms();  // Reload rooms after update
      }, error => {
        alert('Error updating room: ' + error.message);
      });
    } else {
      alert('Please provide a valid Room ID and details.');
    }
  }

  // Delete a task
  // deleteTask(): void {
  //   if (this.taskId) {
  //     this.roomService.deleteTask(this.taskId).subscribe(() => {
  //       alert('Task deleted successfully!');
  //     }, error => {
  //       alert('Error deleting task: ' + error.message);
  //     });
  //   } else {
  //     alert('Please provide a valid Task ID.');
  //   }
  // }

  // Get available rooms by type
  loadAvailableRoomsByType(): void {
    if (this.roomTypeId) {
      this.roomService.getAvailableRoomsByType(this.roomTypeId).subscribe((rooms: Room[]) => {
        this.availableRooms = rooms;
      });
    } else {
      alert('Please provide a valid Room Type ID.');
    }
  }

  // Get rooms by location
  loadRoomsByLocation(): void {
    if (this.location) {
      this.roomService.getRoomsByLocation(this.location).subscribe((rooms: Room[]) => {
        this.rooms = rooms;
      });
    } else {
      alert('Please provide a valid Location.');
    }
  }

  // Get rooms by amenity
  loadRoomsByAmenity(): void {
    if (this.amenityId) {
      this.roomService.getRoomsByAmenity(this.amenityId).subscribe((rooms: Room[]) => {
        this.rooms = rooms;
      });
    } else {
      alert('Please provide a valid Amenity ID.');
    }
  }

}
