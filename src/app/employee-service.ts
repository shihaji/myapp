import { Injectable } from '@angular/core';
import Employee from './employee';
import employeeList from './employeeUtil';

@Injectable({
  providedIn:"root"
})
export class EmployeeService {


  getAllEmp():Employee[]{

    return employeeList;

  }
  

  registerEmployee(emp:Employee):boolean{
    
    if(employeeList.find(e=>e.id===emp.id)){
        return false;
    }else{

    employeeList.push(emp);
    return true;
    }

  }

}
