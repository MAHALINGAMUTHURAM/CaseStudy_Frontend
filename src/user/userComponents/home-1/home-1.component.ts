import { Component } from '@angular/core';
import { AreaService } from '../../area/areaService/area.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelService } from '../../../hotel/hotelService/hotel.service';
import { RouterLink} from '@angular/router';
@Component({
  selector: 'app-home-1',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './home-1.component.html',
  styleUrl: './home-1.component.css'
})
export class Home1Component {

  area: any[] = [];  
  selectedArea: any;  
  hotels: any[] = [];
  amenities: any[]=[];  
  selectedAmenity: any; 
  constructor(private areaService: AreaService, private hotelService: HotelService) {}

  ngOnInit(): void {
    this.getAllAreas();
    // this.getAllAmenity();
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

  



  

}
