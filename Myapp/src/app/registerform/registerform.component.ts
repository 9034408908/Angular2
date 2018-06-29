import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  constructor() { }
  @ViewChild('r') ff;FormGroup;

  ngOnInit() {
  }
register(){
  console.log(this.ff.value)
  
}
}
