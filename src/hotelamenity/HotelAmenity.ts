import { Amenity } from "../amenity/Amenity";
import { Hotel } from "../hotel/Hotel";

export interface HotelAmenityDTO {
    hotel: Hotel; 
    amenity: Amenity; 
}