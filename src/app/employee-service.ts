import { Injectable } from '@angular/core';
import Employee from './employee';
import employeeList from './employeeUtil';

@Injectable({
  providedIn:"root"
})
export class EmployeeService {


  searchEmployee(id:number):Employee|undefined{
    return employeeList.find(e=>e.id==id);
   
  }

  getAllEmp():Employee[]{

    return employeeList;

  }
  
  registerEmployee(emp:Employee):boolean{
    
    if(employeeList.find(e=>e.id==emp.id)){
        return false;
    }else{
    employeeList.push(emp);
  
    console.log(employeeList);
    return true;
    }

  }

}
