
import { Component, Input } from '@angular/core';
import { Reservation } from '../../../reservation/Reservation';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../../../payment/paymentService/payment.service';
import { ReservationService } from '../../../reservation/reservationService/reservation.service';
import { Payment } from '../../../payment/Payment';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
declare var Razorpay:any;
@Component({
  selector: 'app-home-4',
  imports:[CommonModule],
  templateUrl: './home-4.component.html',
  styleUrls: ['./home-4.component.css']
})
export class Home4Component {

  @Input() hotel: any;

  @Input() reservation: Reservation = {   
    guest_name: '',
    guest_email: '',
    guest_phone: '',
    checkInDate: new Date(),
    checkOutDate: new Date(),
    user:{
      username:'',
      password:''
    },
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
  isModalOpen = false;
  payment:Payment=
  {
    reservation: this.reservation,
    amount: 0,
    payment_date: new Date(),
    paymentStatus: "COMPLETED"
  }
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private paymentService: PaymentService,
    private reservationService:ReservationService,
    private router:Router
  ) {}

  // Method to calculate the number of nights
  calculateNumberOfNights(): number {
    const checkIn = new Date(this.reservation.checkInDate);
    const checkOut = new Date(this.reservation.checkOutDate);

    // Calculate the difference in time and convert it to days
    const timeDifference = checkOut.getTime() - checkIn.getTime();
    const numberOfNights = timeDifference / (1000 * 3600 * 24);

    return numberOfNights;
  }

  // Method to calculate the total price for the stay
  calculateTotalPrice(): number {
    const numberOfNights = this.calculateNumberOfNights();
    return numberOfNights * this.reservation.room.roomtype.pricePerNight;
  }

  // Process payment method (uses the calculated price)
  processPayment(): void {
    console.log('yes');
    this.payment.amount = this.calculateTotalPrice();

        // After the reservation is saved, save the payment
        this.paymentService.savePaymentAndReservation(this.reservation,this.payment).subscribe({
          next: (paymentResponse) => {
            alert('Payment successful! Your reservation is confirmed.');
            // this.processPayment();
          },
      error: (err) => {
        alert(`Error saving reservation: ${err}`);
        alert(JSON.stringify(err));
      }
    });
}
// ngAfterViewInit() {
//   // Initialize the modal using jQuery
//   const modalElement = $('#finalDetailsModal');
//   modalElement.modal({ show: false });  // Initialize modal but keep it hidden by default

//   // Event listeners to open and close the modal
//   $('#openModalButton').on('click', () => {
//     modalElement.modal('show'); // Show the modal when the button is clicked
//   });

//   $('#closeModalButton').on('click', () => {
//     modalElement.modal('hide'); // Hide the modal when the close button is clicked
//   });
// }
payNow() {
  const RazorpayOptions = {
    key: 'rzp_test_zWhcqYLonnFntk',
    amount: this.calculateTotalPrice()*100,
    currency: 'INR',
    name: 'Book Inventory',
    description: 'Sample Razorpay demo',
    image: 'https://i.imgur.com/FApqk3D.jpeg',
        prefill: {
          name: 'Book Inventory',
          email: 'sam@gmail.com',
          contact: '9898989898'
        },
        theme: {
          color: '#6466e3'
        },
        handler: (response: any) => {
         
          console.log('Payment successful. Payment ID:', response.razorpay_payment_id);
   
          // Navigate to home after successful payment
          this.processPayment();
          this.router.navigate(['/home']);
        },
        modal: {
          ondismiss: () => {
            console.log('Payment modal dismissed');
          }
        }
      };
   
      try {
        const rzp = new Razorpay(RazorpayOptions);
        rzp.open();
   
       
       
      } catch (error) {
        console.error('Error initializing Razorpay:', error);
      }
    }

}



