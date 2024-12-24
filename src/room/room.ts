import { RoomType } from "../roomType/roomType";
export interface Room {
    
    roomId: number;            
    roomNumber: number;       
    roomtype: RoomType;        
    location: string;         
    available: boolean;
}