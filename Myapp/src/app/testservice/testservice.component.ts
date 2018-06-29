import { Component, OnInit } from '@angular/core';
import { RectangaleserviceService } from '../rectangaleservice.service';


@Component({
  selector: 'app-testservice',
  templateUrl: './testservice.component.html',
  styleUrls: ['./testservice.component.css']
})
export class TestserviceComponent implements OnInit {

  constructor( private x:RectangaleserviceService) { }


  ngOnInit() {
    var ar = this.x.area(10, 15);
    console.log(ar)
    var p = this.x.perameter(10, 20);
    console.log(p)
    
  }
 

}
