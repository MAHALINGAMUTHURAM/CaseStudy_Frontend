
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {

  constructor(private httpClient:HttpClient) { }

  
  AUTHURL:string="http://localhost:8056/"

  saveRoomType(RoomType:any):Observable<any>
  {
     return this.httpClient.post(this.AUTHURL+'api/RoomType/post',RoomType,
     {
      responseType:'json'
     });
  }



  getRoomTypeById(roomTypeId: number): Observable<any> {
    return this.httpClient.get(this.AUTHURL+`api/RoomType/${roomTypeId}`,
    {
     responseType:'json'
    });
  }



  updateRoomType(roomTypeId: number, roomTypeData: any): Observable<any> {
    return this.httpClient.put(this.AUTHURL+`api/RoomType/update/${roomTypeId}`,roomTypeData,
    {
     responseType:'json'
    });  }

    deleteRoomType(roomTypeId: number): Observable<any> {
      return this.httpClient.delete(this.AUTHURL + `api/RoomType/delete/${roomTypeId}`, {
          responseType: 'json'
      });
  }
  
  
}
