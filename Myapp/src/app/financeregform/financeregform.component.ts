import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-financeregform',
  templateUrl: './financeregform.component.html',
  styleUrls: ['./financeregform.component.css']
})
export class FinanceregformComponent implements OnInit {

  constructor() { }
@ViewChild('s') ff; FormGroup;
  ngOnInit() {
  }
save(){
  console.log(this.ff.value)
}

}
