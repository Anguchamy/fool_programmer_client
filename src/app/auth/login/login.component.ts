import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginPayload } from '../login-payload';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginpayload: LoginPayload;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });

    this.loginpayload = {
      username: '',
      password: ''
    }
   }

  ngOnInit() {
  }

  onSubmit(){
    this.loginpayload.username = this.loginForm.get('username').value;
    this.loginpayload.password = this.loginForm.get('password').value;

    this.authService.login(this.loginpayload).subscribe(data => {
      if(data){
        console.log("login Successfully");
        this.router.navigateByUrl("/home");
      } else {
        console.log("Login failed.");
      }
    });
  }
}
