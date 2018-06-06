import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-doctorinfo',
  templateUrl: './doctorinfo.component.html',
  styleUrls: ['./doctorinfo.component.css']
})
export class DoctorinfoComponent implements OnInit {
private doctors:any[]=[]; 
private doc: any={};
private stt:string;
  constructor(private http:Http) { 
this.getDoctors();
  }
getDoctors(){
  this.http.get('https://mydata-71584.firebaseio.com/mydata.json').subscribe(
    (res: Response) => {
      var resJson=res.json();
      var keys=Object.keys(resJson);
      this.doctors=keys.map(function(x){
      return{id:x,data:resJson[x]}
      });
      console.log("this.doctors")
    },
    (err)=>{
      console.log('The error is', err)
    }
  )
}
  ngOnInit() {
  }
save(){
this.stt="Saving..."
  this.http.post('https://mydata-71584.firebaseio.com/mydata.json',this.doc).subscribe(
    (res: Response) => {
      console.log('Record saved!');
    },
    (error) => {
      console.log('The error is', error)
    },
    ()=>{
      this.doc={};
      this.getDoctors();
      this.stt = "Record saved successfully!"
    }
  )
}
}
