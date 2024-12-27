import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../hotel/hotelService/hotel.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../../../room/roomService/room.service';
import { Room } from '../../../room/room'; // Assuming you have a Room model
import { Hotel } from '../../../hotel/Hotel';
import { Reservation } from '../../../reservation/Reservation';
import { FormsModule } from '@angular/forms';
import { ReviewService } from '../../../review/reviewService/review.service';
import { Review } from '../../../review/Review';
import { Router } from '@angular/router';
import { ReservationService } from '../../../reservation/reservationService/reservation.service';
import { json } from 'stream/consumers';
@Component({
  selector: 'app-home-3',
  imports: [CommonModule,FormsModule],
  templateUrl: './home-3.component.html',
  styleUrls: ['./home-3.component.css']  // Fixed typo from styleUrl to styleUrls
})
export class Home3Component implements OnInit {

  hotelDetails: any;
  hotelId: any;  // Explicit type for hotelId
  rooms: Room[] = [];
    // Using Room type for better type safety
    reviews: Review[] = [];
  selectedRoom:any;
  reservation: Reservation = {
    guest_name: '',
    guest_email: '',
    guest_phone: '',
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
    private roomService: RoomService,
    private reviewService:ReviewService,
    private reservationService:ReservationService,
    private router:Router
  ) {}

  openBookingForm(room: Room): void {
    this.selectedRoom = room;
    this.reservation.room = room;  // Pre-select the room in the reservation object
  }

  ngOnInit(): void {
    this.hotelId = +this.activatedRoute.snapshot.params["hotelId"];  // Ensure the id is a number
    this.getHotelById();
    this.getAllRooms();
    this.getReviewsByHotelId(this.hotelId);
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
  saveReservation(): void {
    this.reservationService.saveReservation(this.reservation).subscribe({
      next: (response) => {
        console.log('Reservation saved successfully');
        // Navigate to the payment page and pass the reservation ID
        this.router.navigate(['/payment'], { queryParams: { reservationId: response.reservationId } });
      },
      error: (err) => {
        alert(`Error saving reservation: ${err}`);
        alert(JSON.stringify(err));
      }
    });
  }

  getReviewsByHotelId(hotelId: number): void {
    this.reviewService.getReviewsByHotelId(hotelId).subscribe(
      (data) => {
        this.reviews = data; // Assuming 'reviews' is a component property to store the list of reviews
        console.log('Reviews fetched successfully', data);
      },
      (error) => {
        console.error('Error fetching reviews by hotel ID', error);
      }
    );
  }


}
