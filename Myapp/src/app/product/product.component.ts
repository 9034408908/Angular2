import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
private name:string;
private cost:number;
  private products: any[] = [
    {
      name: 'i-phone',
      cost: 40000
}
  ];
  constructor() { }

  ngOnInit() {
  }
save(){
   var obj={
    name:this.name,
    cost:this.cost
  }
  this.products.push(obj);

}

}
