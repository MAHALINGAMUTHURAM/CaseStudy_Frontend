import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmenityService {

  private AUTHURL: string = "http://localhost:8056/";

  constructor(private httpClient: HttpClient) { }

  saveAmenity(amenity: any): Observable<any> {
    return this.httpClient.post(this.AUTHURL + 'api/amenity/post', amenity, {
      responseType: 'json'
    });
  }

  getAllAmenities(): Observable<any> {
    return this.httpClient.get(this.AUTHURL + 'api/amenity/all', {
      responseType: 'json'
    });
  }

  getAmenityById(amenityId: number): Observable<any> {
    return this.httpClient.get(this.AUTHURL + `api/amenity/${amenityId}`, {
      responseType: 'json'
    });
  }

  updateAmenity(amenityId: number, amenityData: any): Observable<any> {
    return this.httpClient.put(this.AUTHURL + `api/amenity/update/${amenityId}`, amenityData, {
      responseType: 'json'
    });
  }

  deleteAmenity(amenityId: number): Observable<any> {
    return this.httpClient.delete(this.AUTHURL + `api/amenity/${amenityId}`, {
      responseType: 'json'
    });
  }

  getAmenitiesByHotel(hotelId: number): Observable<any> {
    return this.httpClient.get(this.AUTHURL + `api/amenity/hotel/${hotelId}`, {
      responseType: 'json'
    });
  }

  getAmenitiesByRoom(roomId: number): Observable<any> {
    return this.httpClient.get(this.AUTHURL + `api/amenity/room/${roomId}`, {
      responseType: 'json'
    });
  }
}
