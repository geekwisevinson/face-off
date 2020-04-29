import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Profile } from '../models/friend.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }


  public createUser() {
    this.http.get(environment.apiBase + 'users').subscribe( res => {
      console.log(res, 'res');
    });
  }
  public updateUser(profile: Profile) {
    this.http.get(environment.apiBase + 'users').subscribe( res => {
      console.log(res, 'res');
    });
  }
}
