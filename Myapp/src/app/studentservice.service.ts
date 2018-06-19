import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor() { }
  sum(a,b,c){
    return(a+b+c)
  }
  avg(a,b,c){
return(a+b+c)/3
  }
  
}
