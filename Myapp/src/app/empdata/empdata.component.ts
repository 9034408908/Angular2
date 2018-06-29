import { Component, OnInit } from '@angular/core';
import { EmployserviceService } from '../employservice.service';
@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.css']
})
export class EmpdataComponent implements OnInit {
private emp:any={};
private emps:any[]=[];
private stt :string;


  constructor(private emService: EmployserviceService) { 
    this.getempss();
  }

  ngOnInit() {
    
  }
getempss(){
this.emService.get().subscribe(
  (res)=>{
    let record=res.json();
    let keys=Object.keys(record);
    this.emps=keys.map(key=>{
      return{id:key, data:record[key]};
    })
    console.log(this.emps)
  },
  (err)=>{
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
