import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../hotel/hotelService/hotel.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../../../room/roomService/room.service';
import { Room } from '../../../room/room'; // Assuming you have a Room model

@Component({
  selector: 'app-home-3',
  imports: [CommonModule],
  templateUrl: './home-3.component.html',
  styleUrls: ['./home-3.component.css']  // Fixed typo from styleUrl to styleUrls
})
export class Home3Component implements OnInit {

  hotelDetails: any;
  hotelId: any;  // Explicit type for hotelId
  rooms: Room[] = [];  // Using Room type for better type safety

  constructor(
    private hotelService: HotelService,
    private activatedRoute: ActivatedRoute,
    private roomService: RoomService
  ) {}

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



}
