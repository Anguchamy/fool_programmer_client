import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostPayload } from './post-payload';
import { AddPostService } from './add-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addPostForm: FormGroup;
  postPayload: PostPayload;

  title = new FormControl('');
  body = new FormControl('');
  username = new FormControl('');

  constructor(private addPostService: AddPostService, private router: Router) {
    this.addPostForm = new FormGroup({
      title: this.title,
      body: this.body,
      username: this.username
    });

    this.postPayload = {
      content:'',
      title: '',
      username: ''
    }
  }

  ngOnInit(): void {
  }

  addPost(){
    this.postPayload.content = this.addPostForm.get('body').value;
    this.postPayload.title = this.addPostForm.get('title').value;
    this.postPayload.username = this.addPostForm.get('username').value;

    this.addPostService.addPost(this.postPayload).subscribe(data =>{
      console.log("post added successfully!!!");
      console.log(this.postPayload);
      this.router.navigateByUrl('/posts');
    }, error =>{
      console.log("Failed to add post");
    });
  }
}
