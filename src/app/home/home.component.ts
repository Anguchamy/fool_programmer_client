import { Component, OnInit } from '@angular/core';
import { AddPostService } from '../add-post/add-post.service';
import { Observable } from 'rxjs';
import { PostPayload } from '../add-post/post-payload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts : Observable<Array<PostPayload>>
  constructor(private postService:AddPostService, private router:Router) {}

  ngOnInit(): void {
    //this.posts= this.postService.getAllPost();
  }
}
