import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostPayload } from './post-payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  private url = 'https://foolprogrammerserver.herokuapp.com/api/posts'
  constructor(private httpClient: HttpClient) { }

  addPost(postPayload: PostPayload){
    console.log(postPayload);
    return this.httpClient.post(this.url+ '/addpost', postPayload);
  }

  getAllPost(): Observable<Array<PostPayload>>{
    return this.httpClient.get<Array<PostPayload>>(this.url+'/all');
  }

  getPost(permalink: Number): Observable<PostPayload>{
    return this.httpClient.get<PostPayload>(this.url+"/post/"+permalink);
  }
}
