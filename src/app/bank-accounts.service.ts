import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, count } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankAccountsService {

  constructor(private httpClient:HttpClient) { }

  getAccountsDetails():Observable<any>
  {
    return this.httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals')
  }
  getFilteredAccounts(term:string):Observable<any>
  {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term)
  
  }
  
  getPaginationAccounts(count:number,page:number):Observable<any>
  {
    return this.httpClient.get(`https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=${count}&page=${page}`)
  }
  createBankAccount(data:any):Observable<any>
  {
    console.warn(data);
    
   return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data)
  }
  nextPage(count:number,page:number){
    console.log()
    return this.httpClient.get(`https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=${count}&page=${page}`)
  }
}
