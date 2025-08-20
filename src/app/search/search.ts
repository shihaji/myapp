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
 
  ngOnInit(){
    
    this.emp="";
    console.log('helo',this.emp);
  }

  id:number=0;
  emp:any;

  empService=inject(EmployeeService);

  search(){
    
    this.empService.searchEmployee(this.id)
    .subscribe({
      next:data=>{this.emp=data;console.log(data)},
      error:err=>this.emp=err.error
    })

  }



}
