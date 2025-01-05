import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelAmenityService {

  private AUTHURL: string = "http://localhost:8056/";

  constructor(private httpClient: HttpClient) { }

  saveHotelAmenity(hotelAmenity: any): Observable<any> {
    return this.httpClient.post(this.AUTHURL + 'api/hotelamenity/post', hotelAmenity, {
      responseType: 'json'
    });
  }
}

