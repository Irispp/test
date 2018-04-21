import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {ActivatedRoute} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
=======
>>>>>>> ba13596921dff03c31674e9dea5932d7a0f517fb

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
<<<<<<< HEAD
  // properties
  wid: string;
  website = {};
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.wid = params['wid'];
        }
      );
    this.website = this.websiteService.findWebsiteById(this.wid);
=======

  constructor() { }

  ngOnInit() {
>>>>>>> ba13596921dff03c31674e9dea5932d7a0f517fb
  }

}
