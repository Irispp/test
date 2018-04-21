import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
=======
>>>>>>> ba13596921dff03c31674e9dea5932d7a0f517fb

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
<<<<<<< HEAD
  // properties
  userId: string;
  user = {};
  username: string;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );
    this.user = this.userService.findUserById(this.userId);
    this.username = this.user['username'];
  }
=======

  constructor() { }

  ngOnInit() {
  }

>>>>>>> ba13596921dff03c31674e9dea5932d7a0f517fb
}
