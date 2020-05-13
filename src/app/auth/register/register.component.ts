import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RegisterPayload } from '../register-payload';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  registerPayload: RegisterPayload;

  constructor(private formbuilder: FormBuilder, private authservice: AuthService, private router:Router) {
    this.registerForm = this.formbuilder.group({
      username:'',
      password:'',
      confirmPassword:'',
      email:'',
      age: ''
    });

    this.registerPayload = {
      username:'',
      password:'',
      confirmPassword:'',
      email:'',
      age: ''
    }
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.registerPayload.username = this.registerForm.get('username').value;
    this.registerPayload.password = this.registerForm.get('password').value;
    this.registerPayload.age = this.registerForm.get('age').value;
    this.registerPayload.confirmPassword = this.registerForm.get('confirmPassword').value;
    this.registerPayload.email = this.registerForm.get('email').value;

    this.authservice.register(this.registerPayload).subscribe(data =>{
      console.log("register successfully");
      this.router.navigateByUrl("/register-success");
    }, error =>{
      console.log("error while register the user.!!!");
    });
  }
}
