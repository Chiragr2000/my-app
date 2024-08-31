import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemesService {

  constructor(private http:HttpClient) { }
  getMemesDetails():Observable<any>
  {
    return this.http.get("https://api.imgflip.com/get_memes")
  }
}
