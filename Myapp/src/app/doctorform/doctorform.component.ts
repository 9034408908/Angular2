import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctorform',
  templateUrl: './doctorform.component.html',
  styleUrls: ['./doctorform.component.css']
})
export class DoctorformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
submit(form:NgForm){
  console.log(form.value)
}
}
