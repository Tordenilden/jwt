import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthor } from '../interfaces/IAuthor';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  baseUrl : string = 'https://localhost:44335/api/Authors';
  constructor(private http:HttpClient) { } //1) DI

  readAllAuthors():Observable<IAuthor[]>{
    //return this.http.get<hvis vi skriver data format Her, så transformeres de auto>
    return this.http.get<IAuthor[]>(this.baseUrl);
  }

}
