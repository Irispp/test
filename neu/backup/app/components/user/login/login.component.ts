<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> ba13596921dff03c31674e9dea5932d7a0f517fb

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
<<<<<<< HEAD

export class LoginComponent implements OnInit {
  @ViewChild('f')loginForm: NgForm ;
  // properties
  username: string;
  password: string;
  errorFlag: boolean; // see usage as property binding
  errorMsg: 'Invalid username or password !'; // see usage as two-way data binding

  constructor() { }

  ngOnInit() { }
  login() {
    // fetching data from loginForm
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.errorFlag = this.loginForm.value.errorFlag;
    this.errorMsg = this.loginForm.value.errorMsg;
=======
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
>>>>>>> ba13596921dff03c31674e9dea5932d7a0f517fb
  }

}
