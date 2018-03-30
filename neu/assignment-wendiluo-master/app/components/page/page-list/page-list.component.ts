import { Component, OnInit } from '@angular/core';
import { PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  webId: string;
  pages: any[];
  name: any[];
  constructor(private _pageService: PageService, private activiatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activiatedRouter.params
      .subscribe(
        (params: any) => {
          this.webId = params['wid'];
        }
      );
    this.pages = this._pageService.findPageByWebsiteId(this.webId);
  }
}
