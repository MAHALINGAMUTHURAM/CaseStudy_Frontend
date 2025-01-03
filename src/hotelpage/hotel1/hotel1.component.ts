import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelService } from '../../hotel/hotelService/hotel.service';
import { Room } from '../../room/room';
import { RoomService } from '../../room/roomService/room.service';
import { AreaService } from '../../user/area/areaService/area.service';
import { RoomType } from '../../roomType/roomType';
import { RoomTypeService } from '../../roomType/roomTypeService/room-type.service';
@Component({
  selector: 'app-hotel1',
  imports: [CommonModule, FormsModule],
  templateUrl: './hotel1.component.html',
  styleUrls: ['./hotel1.component.css']
})
export class Hotel1Component implements OnInit {
  hotels: any[] = []; // List of hotels
  selectedHotel: any = {}; // Selected hotel for update
  showEditForm : boolean = false;
  isEditingHotel: boolean = false; // To track if editing mode is active
  isEditingRoom: boolean = false;
  rooms: Room[] = []; // List of rooms
  hotelId: any;  // Explicit type for hotelId
  checkRoom: boolean =false;
  selectedRoom: any={}; // Currently selected room for editing
  room:any={};
  isTrue: boolean=false;
  isCreateHotel:boolean =false;
  hotel:any={};
  selectedArea: any;
  selectedRoomType:any;
  roomtypes:RoomType[]=[];
  //selectedArea: any;
  area: any[] = [];    

  constructor(private hotelService: HotelService,private areaService: AreaService,private roomService:RoomService,private roomTypeService:RoomTypeService) {}

  ngOnInit(): void {
    this.getAllHotels(); // Fetch all hotels on component initialization
  }

  // Fetch all hotels
  getAllHotels(): void {
    this.hotelService.getAllHotels().subscribe({
      next: (data) => {
        this.hotels = data;
      },
      error: (err) => {
        console.error('Error fetching hotels', err);
      }
    });
  }

  getAllRoomTypes(): void {
    this.roomTypeService.getAllRoomTypes().subscribe({
      next: (data) => {
        this.roomtypes = data;
      },
      error: (err) => {
        console.error('Error fetching roomtypes', err);
      }
    });
  }

  // Prepare hotel data for editing
  editHotel(hotel: any): void {
    this.isEditingHotel = true;
    this.selectedHotel = { ...hotel }; // Create a copy to prevent direct modifications
    this.hotelId=this.selectedHotel.hotelId;
    this.isEditingRoom=false;
    this.getAllRooms();
  }

  getAllRooms(): void {
    this.roomService.getRoomsByHotelId(this.hotelId).subscribe({
      next: (data) => {
        this.rooms = data;
        console.log('Rooms data:', this.rooms);
      },
      error: (err) => {
        this.checkRoom=true;
        console.error('Error fetching rooms', err);
      }
    });
  }

  // Update hotel
  updateHotel(): void {
    if (this.selectedHotel.id) {
      this.hotelService.updateHotel(this.selectedHotel.id, this.selectedHotel).subscribe({
        next: (response) => {
          this.showEditForm=false;
          console.log('Hotel updated successfully', response);
          this.getAllHotels(); // Refresh the list
          this.isEditingHotel = false; // Exit editing mode
        },
        error: (err) => {
          console.error('Error updating hotel', err);
        }
      });
    }
  }

  // Cancel editing
  cancelEdit(): void {
    this.isEditingHotel = false;
    this.selectedHotel = {};
  }

  // Delete a hotel
  deleteHotel(hotelId: number): void {
    if (confirm('Are you sure you want to delete this hotel?')) {
      this.hotelService.deleteHotel(hotelId).subscribe({
        next: (response) => {
          console.log('Hotel deleted successfully', response);
          this.getAllHotels(); // Refresh the list
        },
        error: (err) => {
          console.error('Error deleting hotel', err);
        }
      });
    }
  }

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

  editRoom(room: Room): void {
    this.selectedRoom = { ...room };
    this.isEditingRoom=true;
  }

  saveRoom(): void {
    if (this.selectedRoom) {
      this.selectedRoom.roomtype=this.selectedRoomType;
      console.log(this.selectedRoom);
      this.roomService.updateRoom(this.selectedRoom.roomId,this.selectedRoom).subscribe({
        next: (response) => {
          console.log('Room updated successfully', response);
          this.getAllRooms();
          this.selectedRoom = null;
        },
        error: (err) => {
          console.error('Error updating room', err);
        }
      });
    }
  }

  createRoom(): void {
    this.room.roomtype=this.selectedRoomType;
    console.log(this.room);
    // if (this.room.roomNumber && this.room.location && this.room.roomtype) {
      this.roomService.saveRoom(this.room).subscribe((e) => {
        alert('Room created successfully!'); // Reload rooms after creation
      }, error => {
        alert('Error creating room: ' + error.message);
      });
    // } else {
    //   alert('Please fill in all room details.');
    // }
  }
  isCreate()
  {
    this.isTrue=true;


  }
  isHotel()
  {
    this.getAllAreas();
    this.getAllRoomTypes();
    this.isCreateHotel=true;
  }
  saveHotel()
  {
    this.hotel.area=this.selectedArea;
    console.log(this.hotel.area.name);
    this.hotelService.saveHotel(this.hotel).subscribe((e)=>alert(e));
  }

  getAllAreas() {
    this.areaService.getAllArea().subscribe(
      (data) => {
        this.area = data;
      },
      (error) => {
        console.error('Error fetching areas', error);
      }
    );
  }
  //showEditForm: boolean = false;  
 
  startEditOrder(): void {
      //this.selectedOrder = { ...order };
      this.showEditForm = true;
    }
   

}
