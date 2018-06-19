import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  private details:any[];
  private login:any={};
  private stt: string;
  constructor(private x:Http) { 
    this.getDetails();
  }
   getDetails(){
     this.x.get("https://login-a678d.firebaseio.com/details.json").subscribe(
       (res: Response) =>{
         var record = res.json();
         var keys = Object.keys(record);
         this.details=keys.map(function(log){
           return{id:log, data:record[log]}
         });
         console.log(this.details)
       },
       (err) => {
         console.log('The error is', err)
       }
     )
   }

  ngOnInit() {
  }
  save(){
    this.stt="Wait..."
    this.x.post("https://login-a678d.firebaseio.com/details.json",this.login).subscribe(
     (res:Response)=>{
       console.log("Login Success");
       
     },
     (error)=>{
      console.log("Error is",error)
     },
     ()=>{
       this.login={};
       this.getDetails();
       this.stt="Login Successfully"
     }
    )
  }

}
