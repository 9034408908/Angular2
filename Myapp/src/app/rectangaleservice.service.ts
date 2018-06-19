import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RectangaleserviceService {

  constructor() { }
  area(l, b) {
    return (l * b);
  }
  perameter(l,b){
    return 2*(l+b)
  }
}
