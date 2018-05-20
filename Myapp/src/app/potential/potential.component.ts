import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-potential',
  templateUrl: './potential.component.html',
  styleUrls: ['./potential.component.css']
})
export class PotentialComponent implements OnInit {
private mass:string;
private height:string;
private g:string="9.18";
private weight:number;
  constructor() { }

  ngOnInit() {
  }
  cal(){
    this.weight = parseInt(this.mass) * parseInt(this.height) * parseInt(this.g);
  }

}
