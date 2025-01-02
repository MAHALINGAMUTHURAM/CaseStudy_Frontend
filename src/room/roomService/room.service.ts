import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../room';  // Adjust the import path accordingly

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private AUTHURL: string = "http://localhost:8056/";  // Base URL for the API

  constructor(private http: HttpClient) {}

  // Create a new room
  saveRoom(room: Room): Observable<any> {
    return this.http.post<Room>(`${this.AUTHURL}api/rooms/post`, room, {
      responseType: 'json',
    });
  }

  // Get all rooms
  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.AUTHURL}api/room/all`, {
      responseType: 'json',
    });
  }

  // Get a specific room by ID
  getRoomById(roomId: number): Observable<Room> {
    return this.http.get<Room>(`${this.AUTHURL}api/room/${roomId}`, {
      responseType: 'json',
    });
  }

  // Update room details
  updateRoom(roomId: number, roomData: Room): Observable<Room> {
    return this.http.put<Room>(`${this.AUTHURL}api/room/update/${roomId}`, roomData, {
      responseType: 'json',
    });
  }

  // Delete room by ID
  deleteRoom(roomId: number): Observable<void> {
    return this.http.delete<void>(`${this.AUTHURL}api/room/${roomId}`, {
      responseType: 'json',
    });
  }

  // Get rooms by location
  getRoomsByLocation(location: string): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.AUTHURL}api/room/location/${location}`, {
      responseType: 'json',
    });
  }

  // Get rooms by a specific amenity ID
  getRoomsByAmenity(amenityId: number): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.AUTHURL}api/room/amenities/${amenityId}`, {
      responseType: 'json',
    });
  }

  // Get available rooms by room type ID
  getAvailableRoomsByType(roomTypeId: number): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.AUTHURL}api/room/available/${roomTypeId}`, {
      responseType: 'json',
    });
  }

  // Get rooms by hotel ID
  getRoomsByHotel(hotelId: number,startDate:Date,endDate:Date): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.AUTHURL}api/rooms/hotels/${hotelId}/${startDate}/${endDate}`, {
      responseType: 'json',
    });
  }
  getRoomsByHotelId(hotelId: number): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.AUTHURL}api/rooms/hotels/${hotelId}`, {
      responseType: 'json',
    });
  }
}
