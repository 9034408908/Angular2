import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  private patients:any[];
  private pat:any={};
  private stt:string;
  private btn_stt:boolean=true;
  private edit_id:string;
  constructor(private x:Http) { 
  this.getPatients();
  }
  getPatients() {
    this.x.get('https://patient-92113.firebaseio.com/patients.json').subscribe(
      (res: Response) => {
        var record=res.json();
        var keys=Object.keys(record);
        this.patients=keys.map(function(x){
           return{dr:x, data:record[x]}
        });
        console.log(this.patients)
      },
      (err)=>{
        console.log('the error is',err)
      }
    )
  }
  del(x){
    console.log("record delete",x)
    this.x.delete('https://patient-92113.firebaseio.com/patients/'+x+".json").subscribe(
      (res: Response) => {
        console.log('Record deleted', res)
        this.getPatients();
      },
      (error)=>{
        console.log('the error is', error)
      }
    )
  }
  edit(pt){
    this.btn_stt=false;
    this.edit_id=pt.dr;
    this.pat=pt.data;
    console.log("hi")
  }
  update(){
    this.x.put('https://patient-92113.firebaseio.com/patients/' + this.edit_id + ".json",this.pat).subscribe(
      (res: Response) => {
        console.log('Record updated', res)
        this.getPatients();
      },
      (error) => {
        console.log('the error is', error)
      }
  )
  this.btn_stt=true;
  this.pat={};
  }

  ngOnInit() {
  }
save(){
  this.stt="Saving..."
  this.x.post('https://patient-92113.firebaseio.com/patients.json',this.pat).subscribe(
(res:Response)=>{
  console.log("Record Saved")
},
(error)=>{
  console.log('the error is',error)
},
()=>{
this.pat={};
  this.getPatients();
  this.stt = "Record saved successfully!"
}
  )
}
}
