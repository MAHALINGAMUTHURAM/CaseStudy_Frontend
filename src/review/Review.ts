import { Reservation } from "../reservation/Reservation";

export interface Review {
    reviewId?: number; 
    reservation: Reservation; 
    rating: number; 
    comment: string; 
    reviewDate: Date; 
}