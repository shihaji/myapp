import { Component, computed, effect, linkedSignal, signal } from '@angular/core';
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

  radius=signal<number>(1); // signal constructor

  circleArea=computed(()=>3.14*this.radius()*this.radius());

  height=signal<number>(1);
  
  CylinderVolume=linkedSignal({
    source:this.circleArea,
    computation:(n)=> n* this.height(),
    equal:(o,n)=>{ console.log(o,"  ",n); return o==n}
  });






  

}
