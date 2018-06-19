import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
private actors:any[];
private actor:any={};
private stt:string;
private edit_id:string;
private btn_stt:boolean=true;
  constructor(private act: Http) { 
this.getActors();
  }
getActors(){
  this.act.get('https://actor-9a478.firebaseio.com/actors.json').subscribe(
    (res: Response) => {
     var hero=res.json();
     var keys=Object.keys(hero);
     this.actors=keys.map(function(bolly){
         return{wood:bolly, data:hero[bolly]}
     });
           console.log(this.actors)
    },
    (err) => {
      console.log("the error is", err)
    }
  )
}
del(bolly){
  console.log("record delete", bolly)
  this.act.delete('https://actor-9a478.firebaseio.com/actors/'+bolly+".json").subscribe(
    (res: Response) => {
      console.log("Record deleted",res)
      this.getActors();
    },
    (err) => {
      console.log("the error is", err)
    }
  )
}
edit(ato){
this.actor=ato.data;
this.edit_id=ato.wood;
this.btn_stt=false;
console.log("Edited")
}
update(){
  this.actor={};
  this.btn_stt=true;
  this.act.put('https://actor-9a478.firebaseio.com/actors/'+ this.edit_id + ".json", this.actor).subscribe(
    (res: Response) => {
      console.log("Record Updated")
    },
    (error) => {
      console.log("the error is", error)
    }
  )
}
  ngOnInit() {
  }
save(){
  this.stt="Saving..."
  this.act.post('https://actor-9a478.firebaseio.com/actors.json',this.actor).subscribe(
(res:Response)=>{
  console.log("Record Saved")
},
 (error)=>{
  console.log("the error is",error)
},
()=>{
  this.actor={};
  this.getActors();
  this.stt=("Record is saved successfully");
}
  )
}
}
