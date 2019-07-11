import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Feed} from "../models/feed.model"

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  public feeds = new BehaviorSubject<Feed[]>([]);

  constructor() { }

  public postToFeed(post: Feed) {
    const list = this.feeds.value;
    list.push(post);
    this.feeds.next(list);
  }
}
