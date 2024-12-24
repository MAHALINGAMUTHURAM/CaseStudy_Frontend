import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private AUTHURL: string = "http://localhost:8056/";

  constructor(private httpClient: HttpClient) { }

  saveReservation(reservation: any): Observable<any> {
    return this.httpClient.post(this.AUTHURL + 'api/reservation/post', reservation, {
      responseType: 'json'
    });
  }

  getAllReservations(): Observable<any> {
    return this.httpClient.get(this.AUTHURL + 'api/reservation/all', {
      responseType: 'json'
    });
  }

  getReservationById(reservationId: number): Observable<any> {
    return this.httpClient.get(this.AUTHURL + `api/reservation/${reservationId}`, {
      responseType: 'json'
    });
  }

  getReservationsByDateRange(startDate: Date, endDate: Date): Observable<any> {
    const start = startDate.toISOString().split('T')[0]; // Format to YYYY-MM-DD
    const end = endDate.toISOString().split('T')[0]; // Format to YYYY-MM-DD
    return this.httpClient.get(this.AUTHURL + `api/reservation/date-range/${startDate}/${endDate}`, {
      responseType: 'json'
    });
  }

  updateReservation(reservationId: number, reservationData: any): Observable<any> {
    return this.httpClient.put(this.AUTHURL + `api/reservation/update/${reservationId}`, reservationData, {
      responseType: 'json'
    });
  }

  deleteReservation(reservationId: number): Observable<any> {
    return this.httpClient.delete(this.AUTHURL + `api/reservation/${reservationId}`, {
      responseType: 'json'
    });
  }
}

