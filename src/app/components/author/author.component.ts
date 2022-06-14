import { Component, OnInit } from '@angular/core';
import { IAuthor } from 'src/app/interfaces/IAuthor';
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors:IAuthor[]=[];
  constructor(private http:AuthorService) { }

  ngOnInit(): void {
    this.http.readAllAuthors().subscribe(data=>
      this.authors=data
      );
  }

}
