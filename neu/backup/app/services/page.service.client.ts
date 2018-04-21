import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

export class PageService {
  constructor() { }
  pages = [
    { _id: '321', name: 'Post 1', websiteId : '456', description: 'Lorem'},
    { _id: '432', name: 'Post 2', websiteId : '456', description: 'Lorem'},
    { _id: '543', name: 'Post 3', websiteId : '456', description: 'Lorem'}
  ];
  /*
   Implement the following API in the PageService service
   1. createPage(websiteId,page)-adds the page parameter instance to the local pages array.
      The new page's websiteId is set to the websiteId parameter
   2. findPageByWebsiteId(websiteId) - retrieves the pages in local pages array whose websiteId matches
      the parameter websiteId
   3. findPageById(pageId)-retrieves the page in local pages array whose _id matches the pageId parameter
   4. updatePage(pageId, page) - updates the page in local pages array whose _id matches the pageId
      parameter
   5. deletePage(pageId)-removes the page from local pages array whose _id matches the pageId parameter
   */
  api = {
    'createPage' : this.createPage,
    'findPageByWebsiteId' : this.findPageByWebsiteId,
    'findPageById': this.findPageById,
    'updatePage': this.updatePage,
    'deletePage': this.deletePage
  };

  createPage(websiteId, page) {
    // adds the page parameter instance to the local pages array.
    // The new page's websiteId is set to the websiteId parameter.
    this.pages.push(page);
    page.websiteId = websiteId;
    return page;
  }

  findPageByWebsiteId(websiteId) {
    // retrieves the pages in local pages array whose websiteId matches
    // the parameter websiteId
    const pages_websiteId = [];
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {
        pages_websiteId .push(this.pages[x]);
      }
    }
    return pages_websiteId;
  }

  findPageById(pageId) {
    // retrieves the page in local pages array whose _id matches the pageId parameter
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        return this.pages[x];
      }
    }
  }


  updatePage(pageId, page) {
    // updates the page in local pages array whose _id matches the pageId parameter
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages[x] = page;
      }
    }
  }
  deletePage(pageId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        delete this.pages[x];
      }
    }
  }
}
