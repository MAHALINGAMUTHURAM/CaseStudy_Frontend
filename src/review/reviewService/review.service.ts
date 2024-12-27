import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private AUTHURL: string = "http://localhost:8056/";

  constructor(private httpClient: HttpClient) { }

  saveReview(review: any): Observable<any> {
    return this.httpClient.post(this.AUTHURL + 'api/review/post', review, {
      responseType: 'json'
    });
  }

  getAllReviews(): Observable<any> {
    return this.httpClient.get(this.AUTHURL + 'api/review/all', {
      responseType: 'json'
    });
  }

  getReviewById(reviewId: number): Observable<any> {
    return this.httpClient.get(this.AUTHURL + `api/review/${reviewId}`, {
      responseType: 'json'
    });
  }

  getReviewsByRating(rating: number): Observable<any> {
    return this.httpClient.get(this.AUTHURL + `api/review/reviews/rating/${rating}`, {
      responseType: 'json'
    });
  }

  getRecentReviews(): Observable<any> {
    return this.httpClient.get(this.AUTHURL + 'api/review/reviews/recent', {
      responseType: 'json'
    });
  }

  updateReview(reviewId: number, reviewData: any): Observable<any> {
    return this.httpClient.put(this.AUTHURL + `api/review/update/${reviewId}`, reviewData, {
      responseType: 'json'
    });
  }

  deleteReview(reviewId: number): Observable<any> {
    return this.httpClient.delete(this.AUTHURL + `api/review/delete/${reviewId}`, {
      responseType: 'json'
    });
  }
  getReviewsByHotelId(hotelId: number): Observable<any> {
    return this.httpClient.get(this.AUTHURL + `api/review/hotel/${hotelId}`,{

    responseType:'json'
  });
}
}

