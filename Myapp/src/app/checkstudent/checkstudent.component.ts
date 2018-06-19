import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-checkstudent',
  templateUrl: './checkstudent.component.html',
  styleUrls: ['./checkstudent.component.css']
})
export class CheckstudentComponent implements OnInit {

  constructor(private x: StudentserviceService) { 
  
  }

  ngOnInit() {
  var su=this.x.sum(50,60,50);
  console.log("sum is",su)
  }

}
