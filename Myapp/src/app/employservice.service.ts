import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployserviceService {

  constructor( private http:HttpClient) {

   }
   create(data):Observable<any>{
     return this.http.post('https://employees-38b0a.firebaseio.com/employ.json',data)
   }
  get(): Observable<any>{
  return this.http.get('https://employees-38b0a.firebaseio.com/employ.json')
}
  delete(id): Observable<any>{
  return this.http.delete('https://employees-38b0a.firebaseio.com/employ/'+ id + '.json')
}

  update(id, updata): Observable<any>{
  return this.http.put('https://employees-38b0a.firebaseio.com/employ/' + id + '.json',updata)
}
}
