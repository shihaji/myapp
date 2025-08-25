import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, model, OnInit, output, Output, SimpleChanges} 
from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Loginservice } from '../loginservice';
import User from '../user';
import { Router } from '@angular/router';
import { Namevalidator } from '../namevalidator';
import { Namecheckvalid } from '../namecheckvalid';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule,Namevalidator,Namecheckvalid],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login{

 loginService=inject(Loginservice);  
 router=inject(Router);

  @Input()
  emp:any;

  msg="";
  flag=model();
  name1=model();
  
  authenticate(form:NgForm){

    let {name,password}=(form.value);

       this.loginService.auth(new User(name,password))
   .subscribe({
    next:data=>this.router.navigateByUrl("home"),
    error:err=>this.msg="Invalid name or password",
    complete:()=>console.log("completed")  
   })


   
  }

}
