

import { Component, OnInit } from '@angular/core';
import { AutomobileService } from '../automobile.service';

@Component({
  selector: 'app-vechile',
  templateUrl: './vechile.component.html',
  styleUrls: ['./vechile.component.css']
})
export class VechileComponent implements OnInit {
private car:any={};
private cars:any[]=[];
  constructor(private vec: AutomobileService) { }

  ngOnInit() {
    this.getVechiles();
  }
  getVechiles(){
this.vec.get().subscribe(
  (res)=>{
    let record=res.json();
    let keys=Object.keys(record);
    this.cars=keys.map(ke=>{
      return{ id:ke, data:record[ke] };
    })
    console.log(keys)
  },
  (err)=>{
    console.log("the error is",err)
  }
)
  }
  remove(id){
    this.vec.delete(id).subscribe(
      (res) => {
        console.log("Record deleted")
      },
      (error) => {
        console.log("the error is", error)
      }

    )
  }

  

save(){
this.vec.create(this.car).subscribe(
  (res)=>{
    console.log("Record Saved")
  },
  (error)=>{
    console.log("the error is",error)
  },
  ()=>{
    this.getVechiles();
    this.car={};
  }
)
}
}
