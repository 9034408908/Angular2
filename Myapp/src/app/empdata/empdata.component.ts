import { Component, OnInit} from '@angular/core';
import { EmployserviceService } from '../employservice.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.css']
})
export class EmpdataComponent implements OnInit {
private emp:any={};
private emps:any[]=[];
private stt :string;
private edit_id:string;
private btn_stt:boolean=true;
private label= "Enter name";

  constructor(private emService: EmployserviceService, private routes:Router) { 
    this.getempss();

  }

  ngOnInit() {
  }
viewall(){
  this.routes.navigate(["actor"]);
}
getempss(){
this.emService.get().subscribe(
  data=>{
    this.emps = data['emps'];
    console.log(data);
  },
  err=>{
    console.log("the error is",err)
  }
)
}

del(id){
this.emService.delete(id).subscribe(
  (res)=>{
    console.log("record deleted")
  },
  (error)=>{
    console.log("the error is",error)
  },
  ()=>{
    this.getempss();
  }
)
}
edit(xx){
this.emp=xx.data;
this.edit_id=xx.id;
this.btn_stt=false;
}
update(){
  
  this.emService.update(this.edit_id,this.emp).subscribe(
(res)=>{
  console.log("update record")
},
(error)=>{
  console.log("the error is",error)
},
    () => {
      this.getempss();
    }
  )
}

save(){
  
  this.stt="Saving..."
this.emService.create(this.emp).subscribe(
  (res)=>{
    console.log("Record Saved")
  },
  (error)=>{
    console.log("the error is",error)
  },
  ()=>{
    
    this.emp={};
    this.stt="Record saved successfully"
    this.getempss();
  }
)
}

}
