import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Profile} from "../models/friend.model";
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  public friends = new BehaviorSubject<Profile[]>([]);
  constructor(private api: ApiService) { }

  public addUser(profile: Profile) {
    const list = this.friends.value;
    list.push(profile);
    this.friends.next(list);
  }
  public updateUser(profile: Profile) {
    this.api.updateUser(profile)
  }
}
