import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../employee-service';
import Employee from '../employee';

@Component({
  selector: 'app-register',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
  
})
export class Register {

  empService=inject(EmployeeService);

  id:number=0;
  name!:string;
  salary!:number;

  regForm!:FormGroup;

  constructor(public formBuilder:FormBuilder){
    this.regForm=formBuilder.group({
      id:[""],
      name:[""],
      salary:[""]
    })
  }


  register1(){

  }


  msg="";

register(){

    this.empService.registerEmployee
    (new Employee(this.id,this.name,this.salary))
    .subscribe({
      next:data=>this.msg=data.status,
      error:err=>this.msg=err.error.status
    })
  
  }

  saveData(){

    if(this.id>0 || this.name?.length>0||this.salary>0){
      return confirm("You have unsaved data");  // true or false
    }else{
    
      return true;
    }

  }


  



}
