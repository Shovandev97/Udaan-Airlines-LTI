import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public addUser(user:any){
    return this.http.post(`${baseUrl}/registerprocess/`,user);
  }

  public login(user:any){
    return this.http.get(`${baseUrl}/login/loginprocess/${user.email}/${user.password}`);
  }

  public adminlogin(user:any){
    return this.http.get(`${baseUrl}/login/adminloginprocess/${user.email}/${user.password}`);
  }
}
