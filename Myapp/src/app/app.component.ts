import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
private employees:any[]=[];
private emp : any={};
private stt : string;
constructor(private http:Http){
this.getEmployees();
}
getEmployees(){
  this.http.get('https://mydata-71584.firebaseio.com/mydata.json').subscribe(
    (res:Response)=>{
      var resJson=res.json();
      var keys=Object.keys(resJson);
      this.employees=keys.map(function(x){
        return{id:x,data:resJson[x]}
      });
      console.log(this.employees)
    },
    (err)=>{
      console.log('The error is',err)
    }

  )
}
save(){
  this.stt="Saving..."
  this.http.post('https://mydata-71584.firebaseio.com/mydata.json',this.emp).subscribe(
    (res:Response)=>{
      console.log('Record saved!');
    },
    (error)=>{
      console.log('The error is',error)
    },
    ()=>{
      this.emp={};
      this.getEmployees();
      this.stt="Record saved successfully!"
    }
  )
}
  /*  private users : any[];

constructor (private x: Http){//DI
  this.x.get("https://reqres.in/api/users?page=2").subscribe(
    (res : Response)=>{
      var record=res.json().data;
     this.users=record;

    },
    (error)=>{
      console.log('Error is ', error)
    }
  );
}*/


  /*   private a:string="10";
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
  }*/

} 
