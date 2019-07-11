import { Component, OnInit } from '@angular/core';
import {FriendsService} from "../../services/friends.service";

@Component({
  selector: 'geekwise-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {
  public friends = [];
  constructor(private friendsService: FriendsService) { }

  ngOnInit() {
    this.friendsService.friends.subscribe( list =>{
      this.friends = list;
    })
  }

}
