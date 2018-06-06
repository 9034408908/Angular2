import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schoolcrude',
  templateUrl: './schoolcrude.component.html',
  styleUrls: ['./schoolcrude.component.css']
})
export class SchoolcrudeComponent implements OnInit {
  private school:any={};
  private btn_stt:boolean=true;
  private schools:any[]=[
  {
    name:"SD School",
    medium:"English",
    upto:12,
    state:"Haryana"
  }
];
  constructor() { }

  ngOnInit() {
  }
save(){
  this.schools.push(this.school);
  this.school={};
  
}
delete(index){
  this.schools.splice(index,1);
}
edit(sch){
this.school=sch;
this.btn_stt=false;
}
update(){
  this.btn_stt=true;
  this.school={};
}
}
