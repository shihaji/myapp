import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../employee-service';
import Employee from '../employee';
import { Idvalidator } from '../idvalidator';
import { CheckId } from '../check-id';

@Component({
  selector: 'app-register',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
  
})
export class Register {

  empService=inject(EmployeeService);

  idValid=inject(Idvalidator);

  idCheck=inject(CheckId);

  id:number=0;
  name!:string;
  salary!:number;

  regForm!:FormGroup;

  constructor(public formBuilder:FormBuilder){
    this.regForm=formBuilder.group({
      id:["",[Validators.required,this.idValid],[this.idCheck]],
      name:["",[Validators.required]],
      salary:[""]
    })
  }

  getId(){
    return this.regForm.get("id");
  }

  getName(){
    return this.regForm.get("name");
  }


  register(){

    console.log(this.regForm);

    let id=(this.regForm.get('id')?.value);
     let name=(this.regForm.get('name')?.value);
     let salary=(this.regForm.get('salary')?.value);

       this.empService.registerEmployee
     (new Employee(id,name,salary))
     .subscribe({
       next:data=>this.msg=data.status,
       error:err=>this.msg=err.error.status
     })
  }


  msg="";

  saveData(){

    if(this.regForm.get("id")?.value>0 || 
    this.regForm.get("name")?.value.length>0||
    this.regForm.get('salary')?.value>0){
      return confirm("You have unsaved data");  // true or false
    }else{
    
      return true;
    }

  }


  



}
