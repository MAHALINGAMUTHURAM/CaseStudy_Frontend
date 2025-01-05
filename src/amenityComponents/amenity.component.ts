import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms'; 
import { AmenityService } from '../amenity/amenityService/amenity.service';
@Component({
  selector: 'app-amenity',
  imports: [FormsModule,CommonModule,ReactiveFormsModule,],
  templateUrl: './amenity.component.html',
  styleUrl: './amenity.component.css'
})
export class AmenityComponent {

  amenities: any[] = [];
  amenityForm: FormGroup;
  isEditing = false;
  editingAmenityId: number | null = null;

  constructor(private amenityService: AmenityService, private fb: FormBuilder) {
    this.amenityForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getAllAmenities();
  }

  getAllAmenities(): void {
    this.amenityService.getAllAmenities().subscribe({
      next: (data) => (this.amenities = data),
      error: (err) => console.error('Error fetching amenities:', err),
    });
  }

  submitAmenity(): void {
    if (this.amenityForm.invalid) {
      alert('Please fill out the form correctly.');
      return;
    }

    const amenityData = this.amenityForm.value;

    if (this.isEditing && this.editingAmenityId !== null) {
      // Update existing amenity
      this.amenityService.updateAmenity(this.editingAmenityId, amenityData).subscribe({
        next: () => {
          alert('Amenity updated successfully.');
          this.resetForm();
          this.getAllAmenities();
        },
        error: (err) => console.error('Error updating amenity:', err),
      });
    } else {
      // Create new amenity
      this.amenityService.saveAmenity(amenityData).subscribe({
        next: () => {
          alert('Amenity added successfully.');
          this.resetForm();
          this.getAllAmenities();
        },
        error: (err) => console.error('Error creating amenity:', err),
      });
    }
  }

  editAmenity(amenity: any): void {
    this.isEditing = true;
    this.editingAmenityId = amenity.amenityId;
    this.amenityForm.setValue({
      name: amenity.name,
      description: amenity.description,
      status: amenity.status,  // Ensure all fields are provided
    });
      }

  deleteAmenity(id: number): void {
    if (confirm('Are you sure you want to delete this amenity?')) {
      this.amenityService.deleteAmenity(id).subscribe({
        next: () => {
          alert('Amenity deleted successfully.');
          this.getAllAmenities();
        },
        error: (err) => console.error('Error deleting amenity:', err),
      });
    }
  }

  resetForm(): void {
    this.isEditing = false;
    this.editingAmenityId = null;
    this.amenityForm.reset();
  }
}
