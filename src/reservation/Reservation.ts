import { Room } from "../room/room";

export interface Reservation {
    reservationId?: number; 
    guest_name: string; 
    guest_email: string;
    guest_phone: string; 
    checkInDate: Date; 
    checkOutDate: Date; 
    room: Room; 
}
