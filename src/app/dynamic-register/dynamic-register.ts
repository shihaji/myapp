import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-register',
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-register.html',
  styleUrl: './dynamic-register.css'
})
export class DynamicRegister {

  empFormControls=[
    {name:"id",type:"text",label:"id",value:"",validators:{
      required:true,
      pattern:"[0-9]{3,10}"
    }},
    {name:"name",type:"text",label:"name",value:"",validators:{
      required:true,
      pattern:"[a-z]{3,10}"
    }},
    {name:"salary",type:"number",label:"salary",value:"",validators:{
      required:true,
      min:10000,
      max:10000
    }}
   
  ]

  regForm!:FormGroup;

  constructor(public formBuilder:FormBuilder){

    this.regForm=formBuilder.group({});

    for(let control of this.empFormControls){

      let errors=[];

      for(let [key,value] of Object.entries(control.validators)){
        
        console.log(control.name,"  ",key," ",value);
        switch(key){

          case 'required': errors.push(Validators.required);break;
          case 'pattern': errors.push(Validators.pattern(value));break;
          case 'min':errors.push(Validators.min(value));break;
          case 'max':errors.push(Validators.max(value));break;
          default: break;

        }
      }

      this.regForm.addControl(control.name,
        this.formBuilder.control(control.value,errors))

    }
  }

  registerEmp(){
    console.log(this.regForm);
  }

}
