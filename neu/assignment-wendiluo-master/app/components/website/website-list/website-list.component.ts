import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
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
  }

}
