import { Component, inject, Input, input } from '@angular/core';
import { EmployeeService } from '../employee-service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  imports: [FormsModule],
  templateUrl: './delete.html',
  styleUrl: './delete.css'
})
export class Delete {

   empService=inject(EmployeeService);
   router=inject(Router);
   
   id=input(0);

   ngOnInit(){
     
       if(this.id()){
        if(confirm("Are you sure")){
         this.empService.deleteEmp(this.id())
         .subscribe({
         next:data=>this.router.navigate(["home","display"]),
         error:err=>this.msg=(err.error.status)
    })
    
  }else{
    this.router.navigateByUrl("home/display");
  }
}
}

  
   msg:string=""
   idd!:number;
   delete(){
    
    this.empService.deleteEmp(this.idd)
    .subscribe({
      next:data=>this.msg=(data.status),
      error:err=>this.msg=(err.error.status)
    })

   }


}
