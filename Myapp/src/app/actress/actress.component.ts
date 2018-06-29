import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-actress',
  templateUrl: './actress.component.html',
  styleUrls: ['./actress.component.css']
})
export class ActressComponent implements OnInit {
private actress:any[];
private actr:any={};
private stt:string;
private edit_id:string;
private btn_stt:boolean=true;
  constructor(private ac:Http ) { 
    this.getActress();
  }
getActress(){
  this.ac.get('https://actress-b1971.firebaseio.com/actress.json').subscribe(
(res:Response)=>{
  var record=res.json();
  var keys=Object.keys(record);
  this.actress=keys.map(function(heroine){
  return{id:heroine, data:record[heroine]}
  });
  console.log(this.actress);
},
(err)=>{
console.log("the error is",err)
}
  )
}
del(heroine){
  console.log("record deletd", heroine)
  this.ac.delete('https://actress-b1971.firebaseio.com/actress/'+heroine+".json").subscribe(
    (res:Response)=>{
        console.log("deleted",res)
        this.getActress();
    },
    (error)=>{
      console.log("the error is",error)
    }

  )
}
edit(xx){
  this.edit_id=xx.id;
  this.actr=xx.data;
  this.btn_stt=false;
  console.log("edited")
}
update(){
  this.ac.put('https://actress-b1971.firebaseio.com/actress/'+this.edit_id+ ".json",this.actr).subscribe(
    (res:Response)=>{
      console.log("Record Updated")
      this.getActress();
      this.actr={};
    },
    (error)=>{
      console.log("the error is",error)
    }

  )
}
  ngOnInit() {
  }
save(){
  this.stt="Saving..."
  this.ac.post('https://actress-b1971.firebaseio.com/actress.json',this.actr).subscribe(
(res:Response)=>{
  console.log("Record saved")
},
(error)=>{
  console.log("the error is",error)
},
()=>{
  this.stt=("Saved successfully");
  this.actr={};
  this.getActress();
}
  )
}
}
