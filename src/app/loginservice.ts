import { Injectable } from '@angular/core';
import User from './user';
import userList from './userList';

@Injectable({  // singleton
  providedIn: 'root'
})
export class Loginservice {

  flag=false;

  auth(u:User):User|undefined{
    this.flag=true;
   return userList.find(user=>user.name===u.name
     && user.password===u.password);
  
  }
  
}

// employeeService  --skip-tests
