import { Component } from '@angular/core';
import { Reservation } from '../../../reservation/Reservation';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../../../payment/paymentService/payment.service';
import { ReservationService } from '../../../reservation/reservationService/reservation.service';
@Component({
  selector: 'app-home-4',
  imports: [],
  templateUrl: './home-4.component.html',
  styleUrl: './home-4.component.css'
})
export class Home4Component {

  reservationId: number = 0;  // To store the reservation ID
  reservation: Reservation = {   // Placeholder reservation, can be populated after fetching from the backend
    guest_name: '',
    guest_email: '',
    guest_phone: '',
    checkInDate: new Date(),
    checkOutDate: new Date(),
    room: {
      roomId: 0,
      roomNumber: 0,
      location: '',
      available: true,
      roomtype: {
        typeName: '',
        description: '',
        maxOccupancy: 0,
        pricePerNight: 0.0
      }
    }
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private paymentService: PaymentService,
    private reservationService:ReservationService
  ) {}

  ngOnInit(): void {
    this.reservationId = +this.activatedRoute.snapshot.queryParams['reservationId'];  // Get reservation ID from the URL

    // Optionally, fetch the reservation data from backend using the reservationId
    this.fetchReservationData();
  }

  fetchReservationData(): void {
    // Example: Call a service to fetch reservation by ID if needed (you can use your backend API here)
    this.reservationService.getReservationById(this.reservationId).subscribe(reservation => {
      this.reservation = reservation;

    });

    console.log('Reservation data:', this.reservation);  // In case you already have the reservation data
  }

  processPayment(): void {
    const paymentDetails = {
      reservation:this.reservation,
      amount: this.reservation.room.roomtype.pricePerNight,
      paymentDate:Date.now,
      paymentStatus: "COMPLETED"
    };

    this.paymentService.savePayment(paymentDetails).subscribe({
      next: (paymentResponse) => {
        if (paymentResponse.status === 'success') {
          alert('Payment successful! Your reservation is confirmed.');
          // Optionally, update the reservation status to "Paid" in your backend
        } else {
          alert('Payment failed. Please try again.');
        }
      },
      error: (err) => {
        console.error('Error during payment process', err);
        alert('Payment error. Please try again.');
      }
    });
  }

}
