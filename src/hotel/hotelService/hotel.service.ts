import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private httpClient:HttpClient) { }

  
  AUTHURL:string="http://localhost:8056/"

  saveHotel(Hotel:any):Observable<any>
  {
     return this.httpClient.post(this.AUTHURL+'api/hotels/post',Hotel,
     {
      responseType:'json'
     });
  }
  getAllHotels(): Observable<any> {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found!');
      return new Observable();
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.httpClient.get(this.AUTHURL + 'api/hotels/all', {
      headers: headers,
      responseType: 'json'
    });
  }

  getHotelById(hotelId: number): Observable<any> {
    return this.httpClient.get(this.AUTHURL+'api/hotels/${hoteId}',
    {
     responseType:'json'
    });
  }
  getHotelsByAmenity(amenityId: number): Observable<any> {
    return this.httpClient.get(this.AUTHURL+'api/hotels/${amenityId}',
    {
     responseType:'json'
    });
  }
  updateHotel(hotelId: number, hotelData: any): Observable<any> {
    return this.httpClient.put(this.AUTHURL+'api/hotels/${hotelId}',hotelData,
    {
     responseType:'json'
    });  }

}
