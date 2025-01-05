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
import { Home4Component } from '../home-4/home-4.component';
import { UserService } from '../../userService/user.service';
@Component({
  selector: 'app-home-3',
  imports: [CommonModule,FormsModule,Home4Component],
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
    reservationId:0,
    guest_name: '',
    guest_email: '',
    guest_phone: '',
    checkInDate: new Date(),  // default to current date or use a date picker
    checkOutDate: new Date(), // default to current date or use a date picker

    room: {
      roomId: 0,
      roomNumber: 0,
      location: '',
      available: false,
      roomtype: {      
        typeName:'',
        description:'',
        maxOccupancy:0,
        pricePerNight:0.0 }
    }
  };

  startDate:any;
  endDate: any;
  dateRangeSubmitted: boolean = false;
  checkRoom: boolean =false;
  next: boolean =false;
  name:any;
  user:any;

  // Method to handle form submission
  onSubmit(): void {
    this.dateRangeSubmitted = true;
    this.getAllRooms();
    console.log("Start Date:", this.startDate);
    console.log("End Date:", this.endDate);
  }

  constructor(
    private hotelService: HotelService,
    private activatedRoute: ActivatedRoute,
    private roomService: RoomService,
    private reviewService:ReviewService,
    private reservationService:ReservationService,
    private router:Router,
    private userService:UserService
  ) {}

  openBookingForm(room: Room): void {
    this.selectedRoom = room;
    this.reservation.room = room;  // Pre-select the room in the reservation object
  }

  ngOnInit(): void {
    this.hotelId = +this.activatedRoute.snapshot.params["hotelId"];  // Ensure the id is a number
    this.getHotelById();
    this.getReviewsByHotelId(this.hotelId);
    // this.getUser();
  }

  // getUser()
  // {
  //   this.userService.getByUserName(this.name).subscribe({
  //     next: (data) => {
  //       this.user = data;
  //       console.log(this.user)
  //     },
  //     error: (err) => {
  //       alert(`Error fetching hotel details: ${err}`);
  //     }
  //   });
  // }

  getHotelById(): void {
    this.hotelService.getHotelById(this.hotelId,).subscribe({
      next: (data) => {
        this.hotelDetails = data;
      },
      error: (err) => {
        alert(`Error fetching hotel details: ${err}`);
      }
    });
  }

  getAllRooms(): void {
    this.roomService.getRoomsByHotel(this.hotelId,this.startDate,this.endDate).subscribe({
      next: (data) => {
        this.rooms = data;
        this.checkRoom=true;
        console.log('Rooms data:', this.rooms);
      },
      error: (err) => {
        this.checkRoom=true;
        alert(err);
      }
    });
  }
  saveReservation(evt:any): void {
    evt.preventDefault();
    this.reservation.checkInDate=this.startDate;
    this.reservation.checkOutDate=this.endDate;
    // this.reservationService.saveReservation(this.reservation).subscribe({
    //   next: (response) => {
    //     console.log('Reservation saved successfully');
        this.next=true;
//console.log(this.reservation.reservationId);
        // Navigate to the payment page and pass the reservation ID
      //  this.router.navigate(['/payment', this.reservation]);      
    //   },
    //   error: (err) => {
    //     alert(`Error saving reservation: ${err}`);
    //     alert(JSON.stringify(err));
    //   }
    // });
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
