import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, model, OnInit, output, Output, SimpleChanges} 
from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Loginservice } from '../loginservice';
import User from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login{

 loginService=inject(Loginservice);  //ang 14
 router=inject(Router);

  @Input()
  emp:any;


  name:string="";
  password:string="";
  msg="";
  flag=model();
  name1=model();
  
  authenticate(){
    
  if(this.loginService.auth(new User(this.name,this.password))){
   this.router.navigateByUrl("home");
  }else{
    this.msg="Invalid name or password"
  }
  
  }

}
