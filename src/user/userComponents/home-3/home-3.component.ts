import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../hotel/hotelService/hotel.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../../../room/roomService/room.service';
import { Room } from '../../../room/room'; // Assuming you have a Room model
import { Hotel } from '../../../hotel/Hotel';
import { Reservation } from '../../../reservation/Reservation';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home-3',
  imports: [CommonModule,FormsModule],
  templateUrl: './home-3.component.html',
  styleUrls: ['./home-3.component.css']  // Fixed typo from styleUrl to styleUrls
})
export class Home3Component implements OnInit {

  hotelDetails: any;
  hotelId: any;  // Explicit type for hotelId
  rooms: Room[] = [];  // Using Room type for better type safety
  selectedRoom:any;
  reservation: Reservation = {
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    checkInDate: new Date(),  // default to current date or use a date picker
    checkOutDate: new Date(), // default to current date or use a date picker

    room: {
      roomId: 0,
      roomNumber: 0,
      location: '',
      available: true,
      roomtype: {      
        typeName:'',
        description:'',
        maxOccupancy:0,
        pricePerNight:0.0 }
    }
  };

  constructor(
    private hotelService: HotelService,
    private activatedRoute: ActivatedRoute,
    private roomService: RoomService
  ) {}

  openBookingForm(room: Room): void {
    this.selectedRoom = room;
    this.reservation.room = room;  // Pre-select the room in the reservation object
  }

  ngOnInit(): void {
    this.hotelId = +this.activatedRoute.snapshot.params["hotelId"];  // Ensure the id is a number
    this.getHotelById();
    this.getAllRooms();
  }

  getHotelById(): void {
    this.hotelService.getHotelById(this.hotelId).subscribe({
      next: (data) => {
        this.hotelDetails = data;
      },
      error: (err) => {
        alert(`Error fetching hotel details: ${err}`);
      }
    });
  }

  getAllRooms(): void {
    this.roomService.getRoomsByHotel(this.hotelId).subscribe({
      next: (data) => {
        this.rooms = data;
        console.log('Rooms data:', this.rooms);
      },
      error: (err) => {
        console.error('Error fetching rooms', err);
      }
    });
  }
  saveReservation():void
  {
    this.hotelService.saveHotel(this.reservation).subscribe((e)=>alert(e));
  }


}
