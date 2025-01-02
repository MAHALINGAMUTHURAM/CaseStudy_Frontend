import { Area } from "../user/area/area";
export interface Hotel{

    hotelId?: number;
    name:string
    location:string
    description:string;
    area:Area;
}