import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
private products:any[]=[
  {name:'Apple', cal:'40'},
  {name:'Orange', cal:'60'}
]
  constructor() { }

  ngOnInit() {
  }

}
