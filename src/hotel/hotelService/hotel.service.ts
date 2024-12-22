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
}
