import { Reservation } from "../reservation/Reservation";

export interface Payment {
    paymentId?: number; 
    reservation: Reservation; 
    amount: number;
    paymentDate: Date; 
    paymentStatus: string;
}

