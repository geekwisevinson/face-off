import { Component, OnInit } from '@angular/core';
import {FeedService} from "../../services/feed.service";
import {Feed} from "../../models/feed.model";

@Component({
  selector: 'geekwise-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public feed: Feed[] = [];
  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedService.feeds.subscribe( list => {
      this.feed = list;
    })
  }

  public onLike(feed: Feed) {
    feed.likes++;
  }
  public onDislike(feed: Feed) {
    feed.dislikes++;
  }

}
