import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assetcurde',
  templateUrl: './assetcurde.component.html',
  styleUrls: ['./assetcurde.component.css']
})
export class AssetcurdeComponent implements OnInit {
  private asset:any={};
  private btn_stt:boolean=true;
private assets:any[]=[
  {
name:'Building',
area:'EC',
cost:400000,
pic:'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&h=350',
dealer:'Anil',
country:'India',
state:'Karnataks',
new:'new'
}
];
  constructor() { }

  ngOnInit() {
  }
save(){
  this.assets.push(this.asset);
  this.asset = {};
  console.log(this.assets)
}
delete(index){
  this.assets.splice(index,1);
}
edit(ast){
this.asset=ast;
this.btn_stt=false;
}
update(){
  this.btn_stt=true;


  this.asset={};
}
}
