import { inject, Injectable } from '@angular/core';
import Employee from './employee';
import employeeList from './employeeUtil';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:"root"
})
export class EmployeeService {

  httpClient=inject(HttpClient);
  url:string="http://localhost:5001/";


  deleteEmp(id:number):Observable<{status:string}>{

    let e={"id":id};

    return this.httpClient.delete<{status:string}>
    ("http://localhost:5001/deleteEmp",{body:e});

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
