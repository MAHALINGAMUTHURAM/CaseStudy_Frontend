import { Reservation } from "../reservation/Reservation";

export interface Payment {
    paymentId?: number; 
    reservation: Reservation; 
    amount: number;
    payment_date: Date; 
    paymentStatus: string;
}

