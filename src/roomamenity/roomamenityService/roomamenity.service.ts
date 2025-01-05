import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoomamenityService {

  private AUTHURL: string = "http://localhost:8056/";

  constructor(private httpClient: HttpClient) { }

  saveRoomAmenity(roomAmenity: any): Observable<any> {
    return this.httpClient.post(this.AUTHURL + 'api/roomAmenity/post', roomAmenity, {
      responseType: 'json'
    });
  }
}
