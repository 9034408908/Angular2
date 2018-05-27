import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-crudeproduct',
  templateUrl: './crudeproduct.component.html',
  styleUrls: ['./crudeproduct.component.css']
})
export class CrudeproductComponent implements OnInit {
private doc:any={};
private btn_stt:boolean=true;
private doctor:any[]=[
  {name:'Anil',
  pic:'https://media.istockphoto.com/photos/friendly-doctor-at-the-hospital-picture-id511583494?k=6&m=511583494&s=612x612&w=0&h=-8azV9sjiTx9dPBAIxy0I9g15pUVs4gTVT7gGsjx9J4=',
  specilization:'ENT',
  gender:'male',
  mobile:'9034408908'
}
];
  constructor() { }

  ngOnInit() {
  }
save(){
  this.doctor.push(this.doc);
  this.doc={};
  console.log(this.doctor)
}
delete(index){
  this.doctor.splice(index,1);
}
edit(doct){
this.doc=doct;
  this.btn_stt = false;
}


}
