import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[Namevalid]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:Namevalidator,
    multi:true
  }]
})
export class Namevalidator implements Validator{

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    
    let name:string=control.value;
    let name2=name?.toLowerCase();

    if(!name){
      return null;
    }

    if(name.length>2 && name==name2 && name.length<10){
      return null;
    }else{
      return {nameError:true};
    }


  }
  
}
