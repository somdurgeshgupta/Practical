import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'users'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlluserdataService {
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('http://localhost:3000/registerUserList');
  }
}
