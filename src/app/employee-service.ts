import { inject, Injectable, signal } from '@angular/core';
import Employee from './employee';
import { HttpClient, httpResource } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:"root"
})
export class EmployeeService {

  httpClient=inject(HttpClient);
  url:string="http://localhost:5001/";

  sid=signal<string>("0");

  cities=httpResource<{id:number,name:string}[]>
  (()=>`http://localhost:5001/cities/${this.sid()}`)

  states=httpResource<{id:number,name:string}[]>
  (()=>"http://localhost:5001/states")


  checkEmpId(id:number):Observable<{count:number}>{

   return  this.httpClient.get<{count:number}>(`${this.url}checkId/${id}`);
   
  }

  deleteEmp(id:number):Observable<{status:string}>{

    let e={"id":id};

    return this.httpClient.delete<{status:string}>
    (`${this.url}deleteEmp`,{body:e});

  }

  searchEmployee(id:number):Observable<Employee|string>{
   
       return this.httpClient.get<Employee|string>
       (`${this.url}searchEmp/${id}`)
       
  }

  getAllEmp():Observable<Employee[]>{

    return this.httpClient.get<Employee[]>(`${this.url}listAll`);

  }
  
  registerEmployee(emp:Employee):Observable<{status:string}>{

   return this.httpClient.post<{status:string}>
   (`${this.url}registerEmp`,emp);

  }

}
