import { Component, computed, effect, inject, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-states',
  imports: [FormsModule,CommonModule],
  templateUrl: './states.html',
  styleUrl: './states.css'
})
export class States {
  
  empService=inject(EmployeeService);

  state=signal<string>("");

  city=signal<string>("");

  states=this.empService.states;
  cities=this.empService.cities;


  test(e:any){
     this.empService.sid.set(this.state())
  }
  
  

}
