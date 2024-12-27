import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HotelService } from '../../../hotel/hotelService/hotel.service';
@Component({
  selector: 'app-create-hotel',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent {
  formVisible = false;
  hotel = {
    hotelId: '',
    hotelName: '',
    hotelDescription: '',
    hotelLocation: ''
  };
  
    constructor(private hotelService: HotelService,private http: HttpClient) {}
  
    toggleForm() {
      this.formVisible = !this.formVisible;
    }
  
    saveHotel(): void {
      this.hotelService.saveHotel(this.hotel).subscribe({
        next: (response: any) => {
          console.log('Hotel added successfully:', response);
          alert('Hotel added successfully!');
          this.resetForm(); // Reset the form after successful addition
        },
        error: (err) => {
          console.error('Error adding hotel:', err);
          alert('Failed to add the hotel. Please try again.');
        }
      });
    }
    
    resetForm(): void {
      this.hotel = {
        hotelId: '',
        hotelName: '',
        hotelDescription: '',
        hotelLocation: ''
      };
    }
  }    