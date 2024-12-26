import { Room } from "../room/room";

export interface Reservation {
    reservationId?: number; 
    guestName: string; 
    guestEmail: string;
    guestPhone: string; 
    checkInDate: Date; 
    checkOutDate: Date; 
    room: Room; 
}
