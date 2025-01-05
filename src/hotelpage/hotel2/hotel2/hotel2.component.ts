import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Room } from '../../../room/room';
import { RoomService } from '../../../room/roomService/room.service';
import { RoomType } from '../../../roomType/roomType';
import { HotelService } from '../../../hotel/hotelService/hotel.service';
import { AreaService } from '../../../user/area/areaService/area.service';
import { RoomTypeService } from '../../../roomType/roomTypeService/room-type.service';
import { HotelAmenityService } from '../../../hotelamenity/hotelamenityService/hotelamenity.service';
import { AmenityService } from '../../../amenity/amenityService/amenity.service';
import { RoomamenityService } from '../../../roomamenity/roomamenityService/roomamenity.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-hotel2',
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './hotel2.component.html',
  styleUrls: ['./hotel2.component.css']
})
export class Hotel2Component implements OnInit {

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
  amenities: any[] = [];
  selectedAmenity:any;
  hotelAmenity:any={};
  roomAmenity:any={};
  isCreateRoomType: boolean = false;
  isEditingRoomType = false;
  newRoomType: any = {};

  constructor(private hotelService: HotelService,private areaService: AreaService,private roomService:RoomService,private roomTypeService:RoomTypeService,private hotelAmenityService:HotelAmenityService,private amenityService:AmenityService,private roomAmenityService:RoomamenityService) {}

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
      next: (data: RoomType[]) => {
        this.roomtypes = data;
      },
      error: (err: any) => {
        console.error('Error fetching roomtypes', err);
      }
    });
  }
  saveRoomType() {
   
    this.roomTypeService.saveRoomType(this.newRoomType).subscribe((response: any) => {
      console.log('Room type created successfully', response);
      this.isCreateRoomType = false;
      this.newRoomType = {};
      this.getAllRoomTypes();
    });
  }
  updateRoomType() {
 
    this.roomTypeService.updateRoomType(this.selectedRoomType.id,this.selectedRoomType).subscribe((response: any) => {
      console.log('Room type updated successfully', response);
      this.isEditingRoomType = false;
      this.getAllRoomTypes();
    });
  }

  // Prepare hotel data for editing
  editHotel(hotel: any): void {
    this.isEditingHotel = true;
    this.getAllRoomTypes();
    this.selectedHotel = { ...hotel }; // Create a copy to prevent direct modifications
    this.hotelId=this.selectedHotel.hotelId;
    this.getAllAmenity();
    // this.isEditingRoom=false;
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
    // if (this.selectedHotel.id) {
      this.hotelService.updateHotel(this.selectedHotel.hotelId, this.selectedHotel).subscribe({
        next: (response) => {
          this.showEditForm=false;
          alert('Hotel updated successfully!');
          this.getAllHotels(); // Refresh the list
          this.isEditingHotel = false; // Exit editing mode
        },
        error: (err) => {
          console.error('Error updating hotel', err);
        }
      });
    // }
  }
  editRoomType(roomtype: any) {
    this.selectedRoomType = { ...roomtype }; // Set selected room type for editing
    this.isEditingRoomType = true; // Show edit form
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
          alert('Room updated successfully!');
          this.getAllRooms();
          this.isEditingRoom=false;
          // this.selectedRoom = null;
        },
        error: (err) => {
          console.error('Error updating room', err);
        }
      });
    }
  }

  createRoom(): void {
    this.room.roomtype=this.selectedRoomType;
    this.room.available=true;
    this.room.hotel=this.selectedHotel;
    console.log(this.room);
    // if (this.room.roomNumber && this.room.location && this.room.roomtype) {
      this.roomService.saveRoom(this.room).subscribe((e) => {
        this.getAllRooms();
        alert('Room created successfully!'); // Reload rooms after creation
        this.isTrue=false;
      }, error => {
        alert('Error creating room: ' + error.message);
      });
    // } else {
    //   alert('Please fill in all room details.');
    // }
  }
  cancelAddRoom()
  {
    this.isTrue=false;
  }
  isCreate()
  {
    this.isTrue=true;

  }
  cancel()
  {
    this.isEditingHotel=false;
    this.isCreateHotel=false;
    this.rooms=[];
    this.isCreateRoomType=false;
    this.isEditingRoomType=false;
  }
  isHotel()
  {
    this.getAllAreas();
    this.isCreateHotel=true;
  }
  saveHotel()
  {
    this.hotel.area=this.selectedArea;
    console.log(this.hotel.area.name);
    this.hotelService.saveHotel(this.hotel).subscribe((e)=>{
    this.isCreateHotel=false;
    this.getAllHotels();
    alert('Hotel Created Successfully!')
  }
    );
  }

  saveHotelAmenity()
  {
    // console.log(this.selectedHotel);
    this.hotelAmenity.hotel=this.selectedHotel;
    this.hotelAmenity.amenity=this.selectedAmenity;
    // console.log(this.hotel.area.name);
    this.hotelAmenityService.saveHotelAmenity(this.hotelAmenity).subscribe((e)=>{
    this.isCreateHotel=false;
    this.getAllHotels();
    alert('HotelAmenity Created Successfully!')
  }
    );
  }

  saveRoomAmenity()
  {
    // console.log(this.selectedHotel);
    this.roomAmenity.room=this.selectedRoom;
    this.roomAmenity.amenity=this.selectedAmenity;
    // console.log(this.hotel.area.name);
    this.roomAmenityService.saveRoomAmenity(this.roomAmenity).subscribe((e)=>{
    this.isEditingRoom=false;
    this.getAllHotels();
    alert('RoomAmenity Created Successfully!')
  }
    );
  }

  getAllAmenity() {
    this.amenityService.getAllAmenities().subscribe(
      (data) => {
        this.amenities = data;
      },
      (error) => {
        console.error('Error fetching areas', error);
      }
    );
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
