import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Profile} from "../models/friend.model";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  public friends = new BehaviorSubject<Profile[]>([]);
  constructor() { }

  public addUser(profile: Profile) {
    const list = this.friends.value;
    list.push(profile);
    this.friends.next(list);
  }
}
