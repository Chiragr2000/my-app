import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private hhtpClient:HttpClient) { }
  getEmails():Observable<any>
  {
    return this.hhtpClient.get('https://jsonplaceholder.typicode.com/todos')
  }
}
