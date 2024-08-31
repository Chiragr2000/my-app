import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  get: any;
  // patchValue(data: any) {
  //   throw new Error('Method not implemented.');
  // }
  // static getVehicle(id: any) {
  //   throw new Error('Method not implemented.');
  // }
  
  public baseUrl:string = "https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";
  constructor(private httpClient: HttpClient) {}
  getVehicle(id: string): Observable<any> {
    return this.httpClient.get(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'
    );
  }
  getFilteredVehicles(term: string): Observable<any> {
    return this.httpClient.get(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter=' +
        term
    );
  }
  getSortedVehicles(column:string,order:string):Observable<any>
  {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order);
  }
  deleteVehicles(id:string):Observable<any>
  {
    return this.httpClient.delete(`https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/${id}`);
  }
  createVehicles(data: any, id: any):Observable<any>
  {
    return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data);
  }
  updateVehicles(data:any,id:string):Observable<any>
  {
    return this.httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data);
  }
  getVehicles(id:string):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }
}
