import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class UserService {
  constructor() { }
  // local array called users
  users = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia'}
    ];
  /*
    Implement the following API in the UserService service:
    1. createUser(user)-addstheuserparameterinstancetothelocalusersarray
    2. findUserById(userId)-returnstheuserinlocalusersarraywhose_idmatchestheuserIdparameter
    3. findUserByUsername(username) - returns the user in local users array whose username matches the
    parameter username
    4. findUserByCredentials(username, password) - returns the user whose username and password match
    the username and password parameters
    5. updateUser(userId, user) - updates the user in local users array whose _id matches the userId
    parameter
    6. deleteUser(userId)-removestheuserwhose_idmatchestheuserIdparameter
   */
  api = {
    'createUser' : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername': this.findUserByUsername,
    'findUserByCredentials': this.findUserByCredentials,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser
  };
  createUser(user: any) {
      // generate unique id here user._id =
    this.users.push(user);
    return user;
  }
  findUserById(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        return this.users[x];
      }
    }
  }
  findUserByUsername(username: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {
        return this.users[x];
      }
    }

  }
  findUserByCredentials(username: string, password: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username && this.users[x].password === password) {
        return this.users[x];
      }
    }
  }
  updateUser(userId: string, user) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users[x] = user;
      }
    }
  }
  deleteUser(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        delete this.users[x];
      }
    }
  }
}




