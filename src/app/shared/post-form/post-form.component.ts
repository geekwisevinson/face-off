import { Component, OnInit } from '@angular/core';
import {FeedService} from "../../services/feed.service";
import {Feed} from '../../models/feed.model'

@Component({
  selector: 'geekwise-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  public postImgSrc: string;
  public description: string;
  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedService.feeds.subscribe( list => {
      console.log(list);
    })
  }

  public postToForm() {
    this.feedService.postToFeed(new Feed(this.postImgSrc, this.description));
    this.postImgSrc  = '';
    this.description = '';
  }

}
