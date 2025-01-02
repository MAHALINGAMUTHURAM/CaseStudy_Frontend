import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {

  private AUTHURL: string = "http://localhost:8056/";

  constructor(private httpClient: HttpClient) { }

  saveRoomType(roomType: any): Observable<any> {
    return this.httpClient.post(this.AUTHURL + 'api/RoomType/post', roomType, {
      responseType: 'json'
    });
  }

  getRoomTypeById(roomTypeId: number): Observable<any> {
    return this.httpClient.get(this.AUTHURL + `api/RoomType/${roomTypeId}`, {
      responseType: 'json'
    });
  }

  getAllRoomTypes(): Observable<any> {
    return this.httpClient.get(this.AUTHURL + 'api/RoomType/all', {
      responseType: 'json'
    });
  }

  deleteRoomType(roomTypeId: number): Observable<any> {
    return this.httpClient.delete(this.AUTHURL + `api/RoomType/delete/${roomTypeId}`, {
      responseType: 'json'
    });
  }

  updateRoomType(roomTypeId: number, roomTypeData: any): Observable<any> {
    return this.httpClient.put(this.AUTHURL + `api/RoomType/update/${roomTypeId}`, roomTypeData, {
      responseType: 'json'
    });
  }
}

