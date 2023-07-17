import { Injectable } from '@angular/core';
import { Book } from './components/book-collection/book-collection.component';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Array<Book>> { 
    return this.http
      .get<{ items: Book[] }>(
        'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books:any) => books.items || []));
  }
}
