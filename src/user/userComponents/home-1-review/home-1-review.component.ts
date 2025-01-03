import { Component } from '@angular/core';
import { ReservationService } from '../../../reservation/reservationService/reservation.service';
import { Reservation } from '../../../reservation/Reservation';
import { CommonModule } from '@angular/common';
import { ReviewService } from '../../../review/reviewService/review.service';
import { FormsModule } from '@angular/forms';
import { Review } from '../../../review/Review';
@Component({
  selector: 'app-home-1-review',
  imports: [CommonModule,FormsModule],
  templateUrl: './home-1-review.component.html',
  styleUrl: './home-1-review.component.css'
})
export class Home1ReviewComponent {

  reservationList:any[]=[];
  name:any;
  isTrue:boolean=false;
  review:any={};
  rating:any;
  constructor(private reservationService:ReservationService,private reviewService:ReviewService){}

  ngOnInit()
  {
    this.name=localStorage.getItem('name');
    this.getAllReservation();
  }
  getAllReservation()
  {
    this.reservationService.getReservationByUser(this.name).subscribe(
      (data) => {
        this.reservationList = data;
      },
      (error) => {
        console.error('Error fetching areas', error);
      }
    );
  }
  postReview(reservation:any)
  {
    this.isTrue=true;
    this.review.reservation=reservation;
    this.review.hotel=reservation.room.hotel;
    this.review.review_date=new Date();
  }
  saveReview()
  {
    // console.log(this.review);
    this.reviewService.saveReview(this.review).subscribe((e)=>
    {
      console.log(e);
    });
  }

}
