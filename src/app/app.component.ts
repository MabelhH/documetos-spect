import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spect';
  val1:number=0;
  val2:number=0;
  total:number=0;

operacion(){
 if(this.seleccionada=='1'){
  this.total=this.val1+this.val2;

 }
 else if(this.seleccionada=='2'){
  this.total=this.val1-this.val2;
  
 }
 else if(this.seleccionada=='3'){
  this.total=this.val1*this.val2;
  
 }
 else if(this.seleccionada=='4'){
  this.total=this.val1/this.val2;
 }
}
seleccionada:string="inicio";

sumar:string='';
restar:string='';
multiplicar:string='';
dividir:string='';



}
