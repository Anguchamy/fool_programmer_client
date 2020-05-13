import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: String;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.username = this.authService.getLoggedInUsername();
  }

  addpost(){
    this.router.navigateByUrl('/add-post');
  }

  isAuthenticated():boolean{
    //console.log(this.authService.isAuthenticated());
    return this.authService.isAuthenticated();
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl("login");
  }
}
