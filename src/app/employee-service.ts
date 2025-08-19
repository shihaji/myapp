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

  searchEmployee(id:number):Employee|undefined{
    return employeeList.find(e=>e.id==id);
   
  }

  getAllEmp():Employee[]{

    return employeeList;

  }
  
  registerEmployee(emp:Employee):Observable<{status:string}>{

   return this.httpClient.post<{status:string}>
   ("http://localhost:5001/registerEmp",emp);

  }

}
