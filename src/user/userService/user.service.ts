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
  getAllUsers(): Observable<any> {
    return this.httpClient.get(this.AUTHURL + 'api/users', {
      responseType: 'json'
    });
  }
  getByUserName(name:any):Observable<any>{
    return this.httpClient.get(this.AUTHURL + `api/user/${name}`, {
      responseType: 'json'
    });
  }

  getRoleByName(name:any):Observable<any>{
    return this.httpClient.get(this.AUTHURL + `roles/search/${name}`, {
      responseType: 'json'
    });
  }

  makeUserManager(userId:any)
  {
    return this.httpClient.put(this.AUTHURL + `api/manager/register/${userId}`, {
      responseType: 'json'
    });
  }

}
