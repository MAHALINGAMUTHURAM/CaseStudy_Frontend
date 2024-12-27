import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelService } from '../../hotel/hotelService/hotel.service';

@Component({
  selector: 'app-hotel1',
  imports: [CommonModule, FormsModule],
  templateUrl: './hotel1.component.html',
  styleUrls: ['./hotel1.component.css']
})
export class Hotel1Component implements OnInit {
  hotels: any[] = []; // List of hotels
  selectedHotel: any = {}; // Selected hotel for update
  isEditing: boolean = false; // To track if editing mode is active

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.getAllHotels(); // Fetch all hotels on component initialization
  }

  // Fetch all hotels
  getAllHotels(): void {
    this.hotelService.getAllHotels().subscribe({
      next: (data) => {
        this.hotels = data;
      },
      error: (err) => {
        console.error('Error fetching hotels', err);
      }
    });
  }

  // Prepare hotel data for editing
  editHotel(hotel: any): void {
    this.isEditing = true;
    this.selectedHotel = { ...hotel }; // Create a copy to prevent direct modifications
  }

  // Update hotel
  updateHotel(): void {
    if (this.selectedHotel.id) {
      this.hotelService.updateHotel(this.selectedHotel.id, this.selectedHotel).subscribe({
        next: (response) => {
          console.log('Hotel updated successfully', response);
          this.getAllHotels(); // Refresh the list
          this.isEditing = false; // Exit editing mode
        },
        error: (err) => {
          console.error('Error updating hotel', err);
        }
      });
    }
  }

  // Cancel editing
  cancelEdit(): void {
    this.isEditing = false;
    this.selectedHotel = {};
  }

  // Delete a hotel
  deleteHotel(hotelId: number): void {
    if (confirm('Are you sure you want to delete this hotel?')) {
      this.hotelService.deleteHotel(hotelId).subscribe({
        next: (response) => {
          console.log('Hotel deleted successfully', response);
          this.getAllHotels(); // Refresh the list
        },
        error: (err) => {
          console.error('Error deleting hotel', err);
        }
      });
    }
  }
}
