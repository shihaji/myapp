import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FactorialPipe } from './factorial-pipe';
import { Mydirect } from './mydirect';


@Component({
  selector: 'app-root',
  imports: [FormsModule,RouterOutlet,FactorialPipe,Mydirect],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  title="Botree Software Solutions!!"

  flag=true;
  name="guest";
  name2=""

  emp={id:100,name:"abc"};

  changeName(){

    this.emp.name=this.name2;
  }
  

}
