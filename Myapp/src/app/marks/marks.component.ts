import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {
private ch:string;
private phy:string;
private eng:string;
private mat:string;
private ave:number;
  constructor() { }

  ngOnInit() {
  }
avg(){
  this.ave = (parseFloat(this.ch) + parseFloat(this.phy) + parseFloat(this.eng) + parseFloat(this.mat))/4;
}

}
