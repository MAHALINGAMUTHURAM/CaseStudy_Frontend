import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  AUTHURL:string="http://localhost:8056/"

  saveUser(User:any):Observable<any>
  {
     return this.httpClient.post(this.AUTHURL+'api/user/register',User,
     {
      responseType:'json'
     });
  }
  loginUser(User:any):Observable<any>
  {
    return this.httpClient.post(this.AUTHURL+'api/auth',User,
    {
      responseType:'json'
    })
  }
  // getDataService():Observable<any>
  // {
  //   const token=localStorage.getItem('token');
  //   const headers=new HttpHeaders(
  //     {
  //       Authorization:`Bearer ${token}`,
  //     }
  //   );
  //   return this.httpClient.post(this.AUTHURL+'getmessage',null,{headers}); 
  // }
}
