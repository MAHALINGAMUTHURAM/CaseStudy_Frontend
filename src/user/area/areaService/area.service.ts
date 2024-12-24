import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private httpClient:HttpClient) { }

  
  AUTHURL:string="http://localhost:8056/"

  getAllArea(): Observable<any> {

    return this.httpClient.get(this.AUTHURL + 'api/area/all', {
      responseType: 'json'
    });
  }

}
