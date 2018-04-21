import {Website} from '../models/website/website.model.client';
import {WEBSITES} from './website.mock.client';

export class WebsiteService {
<<<<<<< HEAD
  constructor() { }
  websites = [
    { _id: '123', name: 'Facebook', developerId : '456', description: 'Lorem'},
    { _id: '234', name: 'Tweeter', developerId : '456', description: 'Lorem'},
    { _id: '456', name: 'Gizmodo', developerId : '456', description: 'Lorem'},
    { _id: '890', name: 'Go', developerId : '123', description: 'Lorem'},
    { _id: '567', name: 'Tic Tac Toe', developerId : '123', description: 'Lorem'},
    { _id: '678', name: 'Checkers', developerId : '123', description: 'Lorem'},
    { _id: '789', name: 'Chess', developerId : '234', description: 'Lorem'},
  ];
  /*
  Implement the following API in the WebsiteService service
 1. createWebsite(userId,website)-adds the website parameter instance to the local websites array.The
 new website's developerId is set to the userId parameter
 2. findWebsitesByUser(userId)-retrieves the websites in local websites array whose developerId matches
 the parameter userId
 3. findWebsiteById(websiteId) - retrieves the website in local websites array whose _id matches the
 websiteId parameter
 4. updateWebsite(websiteId, website) - updates the website in local websites array whose _id matches
 the websiteId parameter
 5. deleteWebsite(websiteId) - removes the website from local websites array whose _id matches the
websiteId parameter
   */
  api = {
    'createWebsite' : this.createWebsite,
    'findWebsiteByUser' : this.findWebsiteByUser,
    'findWebsiteById': this.findWebsiteById,
    'updateWebsite': this.updateWebsite,
    'deleteWebsite': this.deleteWebsite
  };

  createWebsite(userId: any, website) {
    // adds the website parameter instance to the local websites array.The
    // new website's developerId is set to the userId parameter.
    this.websites.push(website);
    website.developerId = userId;
    website.developerId = userId;
  }

  findWebsiteByUser(userId) {
    // retrieves the websites in local websites array whose developerId matches
    // the parameter userId
    const websites_userId = [];
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {
        websites_userId.push(this.websites[x]);
      }
    }
    return websites_userId;
  }

  findWebsiteById(websiteId) {
    // retrieves the website in local websites array whose _id matches the
    // websiteId parameter
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        return this.websites[x];
      }
    }
  }


  updateWebsite(websiteId, website) {
    // updates the website in local websites array whose _id matches
    // the websiteId parameter
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites[x] = website;
      }
    }
  }

  deleteWebsite(websiteId) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        delete this.websites[x];
      }
    }

=======
  websites: Website[] = WEBSITES;
  findAllWebsites() {
    return this.websites;
>>>>>>> ba13596921dff03c31674e9dea5932d7a0f517fb
  }
}
