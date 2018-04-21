import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
=======
>>>>>>> ba13596921dff03c31674e9dea5932d7a0f517fb

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
<<<<<<< HEAD
  userId: string;
  websites = [{}];
  constructor(private _websiteService: WebsiteService, private activiatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activiatedRouter.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );
    this.websites = this._websiteService.findWebsiteByUser(this.userId);
=======

  constructor() { }

  ngOnInit() {
>>>>>>> ba13596921dff03c31674e9dea5932d7a0f517fb
  }

}
