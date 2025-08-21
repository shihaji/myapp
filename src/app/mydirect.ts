import { Directive, ElementRef, input, Input } from '@angular/core';

@Directive({
  selector: '[appMy]'
})
export class Mydirect {

  constructor(public el:ElementRef) { }

  appMy=input({color:'',fontSize:''});

  ngOnInit(){
    this.el.nativeElement.style.color=this.appMy().color;
    this.el.nativeElement.innerHTML='Pudupet';
    this.el.nativeElement.style.fontSize=this.appMy().fontSize
  }

}
