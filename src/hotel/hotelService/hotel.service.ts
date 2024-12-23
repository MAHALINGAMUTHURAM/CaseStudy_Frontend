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

    return this.httpClient.get(this.AUTHURL + 'api/hotels/all', {
      responseType: 'json'
    });
  }

  getHotelById(hotelId: number): Observable<any> {
    return this.httpClient.get(this.AUTHURL+`api/hotels/${hotelId}`,
    {
     responseType:'json'
    });
  }

  getHotelsByAmenity(amenityId: number): Observable<any> {
    return this.httpClient.get(this.AUTHURL+`api/hotels/amenity/${amenityId}`,
    {
     responseType:'json'
    });
  }

  updateHotel(hotelId: number, hotelData: any): Observable<any> {
    return this.httpClient.put(this.AUTHURL+`api/hotels/${hotelId}`,hotelData,
    {
     responseType:'json'
    });  }

}
