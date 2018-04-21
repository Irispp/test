import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {DomSanitizer} from '@angular/platform-browser';
=======
>>>>>>> ba13596921dff03c31674e9dea5932d7a0f517fb

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
<<<<<<< HEAD
  // properties
  pId: string;
  widgets = [{}];

  constructor(private _widgetService: WidgetService, private activatedRoute: ActivatedRoute, protected sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.pId = params['pid'];
        }
      );
    this.widgets = this._widgetService.findWidgetsByPageId(this.pId);

  }
  // santinizeUrl(url: string) {
  //   return this._sanitizer.bypassSecurityTrustUrl(url);
  // }
=======

  constructor() { }

  ngOnInit() {
  }

>>>>>>> ba13596921dff03c31674e9dea5932d7a0f517fb
}
