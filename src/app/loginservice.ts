import { inject, Injectable } from '@angular/core';
import User from './user';
import userList from './userList';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({  // singleton
  providedIn: 'root'
})
export class Loginservice {

 httpClient= inject(HttpClient);

  flag=false;
                          
  auth(u:User):Observable<{status:boolean}>{
    this.flag=true;
   
    return this.httpClient.post<{status:boolean}>
    ("http://localhost:5001/authenticate",u);
       
  }
  
}

// employeeService  --skip-tests
