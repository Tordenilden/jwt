import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../interfaces/icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  baseUrl : string = 'https://localhost:44335/api/customers';
  constructor(private http:HttpClient) { } //1) DI

  readAllAuthors():Observable<ICustomer[]>{
    //return this.http.get<hvis vi skriver data format Her, så transformeres de auto>
    return this.http.get<ICustomer[]>(this.baseUrl);
  }
}
