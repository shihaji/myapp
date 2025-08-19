import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee-service';
import Employee from '../employee';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
  
})
export class Register {

  empService=inject(EmployeeService);

  id:number=0;
  name!:string;
  salary!:number;

  msg="";

register(){

    let flag=this.empService.registerEmployee
    (new Employee(this.id,this.name,this.salary));
    if(flag){
      this.msg="Employee registered"
    }else{
      this.msg="Employee already exist"
    }
  
  }

  saveData(){

    if(this.id>0 || this.name?.length>0||this.salary>0){
      return confirm("You have unsaved data");  // true or false
    }else{
    
      return true;
    }

  }


  



}
