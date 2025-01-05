import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private AUTHURL: string = "http://localhost:8056/";

  constructor(private httpClient: HttpClient) { }
  savePaymentAndReservation(reservation: any, payment: any,name:any): Observable<any> {
    const payload = { reservation, payment }; // Combining both data into a single payload
    return this.httpClient.post(this.AUTHURL + `api/payment/post/${name}`, payload, { responseType: 'json' });
  }

  getAllPayments(): Observable<any> {
    return this.httpClient.get(this.AUTHURL + 'api/payment/all', {
      responseType: 'json'
    });
  }

  getPaymentById(paymentId: number): Observable<any> {
    return this.httpClient.get(this.AUTHURL + `api/payment/${paymentId}`, {
      responseType: 'json'
    });
  }

  getPaymentsByStatus(status: string): Observable<any> {
    return this.httpClient.get(this.AUTHURL + `api/payment/status/${status}`, {
      responseType: 'json'
    });
  }

  getTotalRevenue(): Observable<any> {
    return this.httpClient.get(this.AUTHURL + 'api/payment/total-revenue', {
      responseType: 'json'
    });
  }

  deletePayment(paymentId: number): Observable<any> {
    return this.httpClient.delete(this.AUTHURL + `api/payment/${paymentId}`, {
      responseType: 'json'
    });
  }
}

