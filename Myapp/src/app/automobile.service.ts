import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AutomobileService {

  constructor(private http:HttpClient) { }
  create(data): Observable<any> {
    return this.http.post('https://auto-f91bd.firebaseio.com/automobiles.json',data);
  }
  get(): Observable<any>{
  return this.http.get('https://auto-f91bd.firebaseio.com/automobiles.json');
}
update(id,upData){
  return this.http.put('https://auto-f91bd.firebaseio.com/automobiles'+id+'.json',upData);
}
}
