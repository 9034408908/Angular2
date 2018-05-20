import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private a:string="10";
  private b:string="20";
  private c: number;
  add(){
    alert("hii")
    this.c=parseInt(this.a)+parseInt(this.b);
  }
  private p : string="60";
  private ch : string="50";
  private h : string="70";
  private m : string="60";
  private e : string="80";
  private av : number;
  avg(){
    alert("Averge")
    this.av = (parseFloat(this.p) + parseFloat(this.ch) + parseFloat(this.h) + parseFloat(this.m) + parseFloat(this.e))/5;
  }

}
