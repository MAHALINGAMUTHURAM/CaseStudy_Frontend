import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentService } from '../payment/paymentService/payment.service';


@Component({
  selector: 'app-payment',
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  payments: any[] = []; // List of payments
  isPaymentsVisible = false; 
  selectedPayment: any = null; // Stores the payment fetched by ID
paymentId: number | null = null;
paymentStatus: string = '';
totalRevenue: any; 
paymentStatuses: string[] = ['COMPLETED', 'PENDING']; 


constructor(private paymentService: PaymentService) {}
  getAllPayments(): void {
    this.isPaymentsVisible = true; // Show the payments section
    this.paymentService.getAllPayments().subscribe({
      next: (data) => {
        this.calculateTotalRevenue();
        this.payments = data;
        console.log('Payments fetched:', this.payments); // Check if payments are fetched correctly
      },
      error: (err) => {
        console.error('Error fetching payments', err);
      }
    });
  }

  getPaymentById(): void {
    if (!this.paymentId) {
      alert('Please enter a valid payment ID');
      return;
    }
  
    this.paymentService.getPaymentById(this.paymentId).subscribe({
      next: (data) => {
        console.log('Payment fetched by ID:', data);
        this.selectedPayment = data;
      },
      error: (err) => {
        console.error('Error fetching payment by ID:', err);
        alert('Payment not found');
      },
    });
  }
  deletePayment(paymentId: number): void {
    if (confirm('Are you sure you want to delete this payment?')) {
      this.paymentService.deletePayment(paymentId).subscribe({
        next: () => {
          console.log(`Payment with ID ${paymentId} deleted successfully.`);
          // Remove the payment from the local list
          this.payments = this.payments.filter(
            (payment) => payment.payment_id !== paymentId
          );
          alert('Payment deleted successfully.');
        },
        error: (err) => {
          console.error('Error deleting payment:', err);
          alert('Failed to delete the payment. Please try again.');
        },
      });
    }
  }
  
  fetchPaymentsByStatus(): void {
    // if (!this.paymentStatus) {
    //   alert('Please enter a valid payment status');
    //   return;
    // }
  
    this.paymentService.getPaymentsByStatus(this.paymentStatus).subscribe({
      next: (data) => {
        console.log('Payments fetched by status:', data);
        this.payments = data; // Store the fetched payments
      },
      error: (err) => {
        console.error('Error fetching payments by status:', err);
        this.paymentStatus='';
        this.payments=[];
        alert('No payment with selected status');
      },
    });
  }
 // Ensure the status argument is provided
fetchPaymentsByStatus1(status: string): void {
  if (status && status.trim() !== '') {
    this.paymentService.getPaymentsByStatus(status).subscribe({
      next: (data) => {
        this.payments = data;
        this.calculateTotalRevenue();
      },
      error: (err) => {
        console.error('Error fetching payments:', err);
      }
    });
  } else {
    console.log('No valid status provided');
  }
}


  // Calculate total revenue by summing up all payments' amounts
  calculateTotalRevenue(): void {

  this.paymentService.getTotalRevenue().subscribe({
    next: (data) => {
      this.totalRevenue=data;
      console.log(data);
    },
    error: (err) => {
      console.error('Error fetching payments:', err);
    }
  });
  
}
}
