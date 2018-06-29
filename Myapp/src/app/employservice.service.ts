import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EmployserviceService {

  constructor( private http:Http) {

   }
   create(data){
     return this.http.post('https://employees-38b0a.firebaseio.com/employ.json',data)
   }
get(){
  return this.http.get('https://employees-38b0a.firebaseio.com/employ.json')
}
delete(id){
  return this.http.delete('https://employees-38b0a.firebaseio.com/employ/'+ id + '.json')
}

update(id,updata){
  return this.http.put('https://employees-38b0a.firebaseio.com/employ/' + id + '.json',updata)
}
}
