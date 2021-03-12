import{UserModel} from './user.model'
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  APIURL ='http://localhost:3000'
constructor(private http:HttpClient) { }
getAllUsers(){
  return this.http.get<UserModel[]>(this.APIURL + 'users');
}
addUser(user:UserModel){
  return this.http.post(this.APIURL+ 'users', user).subscribe();
}
}
