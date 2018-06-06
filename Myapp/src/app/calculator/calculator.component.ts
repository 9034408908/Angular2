import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
 private a:string;
private b:string;
private c:number
  constructor() { }

  ngOnInit() {
  }
sum (){
  this.c=parseInt(this.a)+parseInt(this.b);
}
}
