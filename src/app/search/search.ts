import { Component, inject } from '@angular/core';
import { EmployeeService } from '../employee-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
  
})
export class Search {

  id:number=0;
  emp:any;

  empService=inject(EmployeeService);

  search(){
    console.log("hello",typeof(this.id));
    this.emp=this.empService.searchEmployee(this.id);

  }



}
