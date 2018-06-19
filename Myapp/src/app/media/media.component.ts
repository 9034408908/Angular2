import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
private medias:any[];  
private media: any={};
private stt:string;
private edit_id:string;
private btn_stt:boolean=true;
  constructor(private med:Http) {
   this.getmedias();
   }
getmedias(){
  this.med.get('https://media-a1f7a.firebaseio.com/medias.json').subscribe(
  (res:Response)=>{
    var record=res.json();
    var keys=Object.keys(record);
    this.medias=keys.map(function(news){
      return{ id:news,data:record[news]}
    });
    console.log(this.medias)
  },
  (err)=>{
    console.log("the error is",err)
  }
  )
}
del(news){
  console.log("record delete", news)
  this.med.delete('https://media-a1f7a.firebaseio.com/medias/'+news+".json").subscribe(
(res:Response)=>{
console.log("Record Deleted",res)
this.getmedias();
},
(error)=>{
  console.log("the error is",error)
}
  )
}
edit(md){
  this.media=md.data;
  this.edit_id=md.id;
  this.btn_stt=false;
  console.log("Edited")
}
update(){
  
  this.med.put('https://media-a1f7a.firebaseio.com/medias/'+this.edit_id+ ".json",this.media).subscribe(
    (res: Response) => {
      console.log("Record Updated")
      this.getmedias();
    },
    (error) => {
      console.log("the error is", error)
    }
  )
  this.media = {};
  this.btn_stt = true;
}

  ngOnInit() {
  }

  save(){
    this.stt="Saving..."
    this.med.post('https://media-a1f7a.firebaseio.com/medias.json',this.media).subscribe(
     (res:Response)=>{
       console.log("Record Saved")
     },
     (error)=>{
       console.log("the error is",error)
     },
     ()=>{
       this.media={};
       this.getmedias();
       this.stt="Record saved successfully"
     }
    )
  }
}
