import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-productdatabase',
  templateUrl: './productdatabase.component.html',
  styleUrls: ['./productdatabase.component.css']
})
export class ProductdatabaseComponent implements OnInit {
  private products:any [];
  private pro: any={};
  private stt: string;
  constructor(private http:Http) { 
    this.getProducts();
  }
  getProducts(){
    this.http.get('https://products-74fb7.firebaseio.com/products.json').subscribe(
      (res:Response) => {
      var resJson=res.json();
      var keys=Object.keys(resJson);
      
      this. products=keys.map(function(x){
        return{id:x, data:resJson[x]}
      });
        console.log(this.products)
    },
      (err)=>{
        console.log('The error is', err)
      }
      
    )
  }

  ngOnInit() {
  }
  delPro(x){
    console.log("https://products-74fb7.firebaseio.com/products/" + x + ".json")
    this.http.delete("https://products-74fb7.firebaseio.com/products/"+x+".json").subscribe(
      (res: Response) => {
       console.log('Record deleted',res)
       this.getProducts();
      },
      (err) => {
        console.log('The error is', err)
      }

    )
  }
save(){
  this.stt="Saving..."
  this.http.post('https://products-74fb7.firebaseio.com/products.json',this.pro).subscribe(
  (res: Response)=>{
    console.log("Recored Saved");
  },
  (error)=>{
    console.log('The error is', error);
  },
  ()=>{
    this.pro={};
    this.getProducts();
    this.stt = "Record saved successfully!"
  }
  )
}
}
