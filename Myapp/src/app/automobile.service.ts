import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AutomobileService {

  constructor(private http:Http) { }
  create(data) {
    return this.http.post('https://auto-f91bd.firebaseio.com/automobiles.json',data);
  }
get(){
  return this.http.get('https://auto-f91bd.firebaseio.com/automobiles.json');
}
update(id,upData){
  return this.http.put('https://auto-f91bd.firebaseio.com/automobiles'+id+'.json',upData);
}
delete(id){
  return this.http.delete('https://auto-f91bd.firebaseio.com/automobiles.json',+id+'.json');
}
}
