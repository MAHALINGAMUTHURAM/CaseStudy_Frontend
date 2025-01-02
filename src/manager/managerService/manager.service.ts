import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

 constructor(private httpClient:HttpClient) { }
 
   AUTHURL:string="http://localhost:8056/"
 
   saveHotel(Hotel:any):Observable<any>
   {
      return this.httpClient.post(this.AUTHURL+'api/hotel/post',Hotel,
      {
       responseType:'json'
      });
   }
   saveRoom(Room:any):Observable<any>
   {
     return this.httpClient.post(this.AUTHURL+'api/room/post',Room,
     {
       responseType:'json'
     })
   }
   
 }