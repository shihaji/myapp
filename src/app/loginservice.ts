import { inject, Injectable } from '@angular/core';
import User from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({  
  providedIn: 'root'
})
export class Loginservice {

 httpClient= inject(HttpClient);
  flag=false;
  checkName(name:string):Observable<{count:number}>{

    return this.httpClient.get<{count:number}>
    (`http://localhost:5001/checkName/${name}`)

  }
  

  auth(u:User):Observable<any>{
    this.flag=true;
   
    return this.httpClient.post<any>
    ("http://localhost:5001/authenticate",u,{observe:'response'});
       
  }
  
}


