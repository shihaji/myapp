import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class Idvalidator implements Validator {
  
  validate(control: AbstractControl): ValidationErrors | null {
    
    let id:number=control.value;

    if(!id){
      return null
    }

    return id<100 || id>1000?{idError:true}:null;
  
  }
  
  
}
