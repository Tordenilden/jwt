import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/interfaces/icustomer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  custList:ICustomer[]=[];
  constructor(private http:CustomerService) { }

  ngOnInit(): void {
    this.http.readAllAuthors().subscribe(data=>
      this.custList=data
      );
  }

}
