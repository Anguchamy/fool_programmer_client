import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddPostService } from '../add-post/add-post.service';
import { PostPayload } from '../add-post/post-payload';
import { Observable } from 'rxjs';
import { UrlTree, UrlSegmentGroup, DefaultUrlSerializer, UrlSegment } from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts : Observable<Array<PostPayload>>
  constructor(private postService:AddPostService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParamMap.get('tags'));
    this.posts= this.postService.getPostByTag(this.route.snapshot.queryParamMap.get('tags'));
  }
}
