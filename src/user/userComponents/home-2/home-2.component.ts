import { Component } from '@angular/core';
import { AreaService } from '../../area/areaService/area.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelService } from '../../../hotel/hotelService/hotel.service';
import { RouterLink} from '@angular/router';
import { AmenityService } from '../../../amenity/amenityService/amenity.service';
@Component({
  selector: 'app-home-2',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './home-2.component.html',
  styleUrl: './home-2.component.css'
})
export class Home2Component {

  area: any[] = [];  
  selectedArea: any;  
  hotels: any[] = [];
  amenities: any[]=[];  
  selectedAmenity: any; 

  constructor(private areaService: AreaService, private hotelService: HotelService,private amenityService:AmenityService) {}

  ngOnInit(): void {
    this.getAllAreas();
    this.getAllAmenity();
  }

  getAllAreas() {
    this.areaService.getAllArea().subscribe(
      (data) => {
        this.area = data;
      },
      (error) => {
        console.error('Error fetching areas', error);
      }
    );
  }

  getAllAmenity() {
    this.amenityService.getAllAmenities().subscribe(
      (data) => {
        this.amenities = data;
      },
      (error) => {
        console.error('Error fetching amenities', error);
      }
    );
  }

  onAreaChange() {
    if (this.selectedArea) {
      this.getHotelsByArea(this.selectedArea);
    }
  }

  getHotelsByArea(areaId: number) {
    this.hotelService.getHotelsByArea(areaId).subscribe(
      (data) => {
        this.hotels = data; 
      },
      (error) => {
        console.error('Error fetching hotels for area', error);
      }
    );
  }
  
  onAmenityChange() {
    console.log('Selected Amenity ID:', this.selectedAmenity); 

    this.getHotelsByAmenity(this.selectedAmenity);
  }

  getHotelsByAmenity(amenityId: number) {
    this.hotelService.getHotelsByAmenity(amenityId).subscribe({
      next: (data) => {
        this.hotels = data; 
      },
      error: (err) => {
        console.error('Error fetching hotels:', err);
      }
    });
  }
}

