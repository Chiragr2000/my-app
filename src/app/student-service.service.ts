import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, count } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceService {
  constructor(private httpClient: HttpClient) {}

  getStudentDetails(): Observable<any> {
    return this.httpClient.get(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/student'
    );
  }
  searchStudent(text: string): Observable<any> {
    return this.httpClient.get(
      `https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter=${text}`
    );
  }
  searchByOrder(column: string, order: string): Observable<any> {
    return this.httpClient.get(
      `https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy=${column}&order=${order}`
    );
  }
  paginate(count:number,pageNo:number):Observable<any>
  {
    return this.httpClient.get(`https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit=${count}&page=${pageNo}`)
  }
  deleteStudent(id:number):Observable<any>
  {
   return this.httpClient.delete(`https://6128991386a213001729f9df.mockapi.io/test/v1/student/${id}`)
  }
  createStudent(data:any):Observable<any>
  {
    return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data)
  }
}
