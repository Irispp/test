import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
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
}
