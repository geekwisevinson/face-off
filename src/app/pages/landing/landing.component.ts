import { Component, OnInit } from '@angular/core';
import {FriendsService} from "../../services/friends.service";
import {Profile} from "../../models/friend.model";

@Component({
  selector: 'geekwise-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public imgPath;
  public name;
  public id;
  public isOnline;
  constructor( private friendService: FriendsService) { }

  ngOnInit() {
    this.friendService.friends.subscribe( list => {
      console.log(list);
    })
  }

  public addUser() {
    this.friendService.addUser(
      new Profile(this.name, this.id, this.isOnline, this.imgPath )
    )
  }
}
