import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCollectionComponent } from '../components/book-collection/book-collection.component';
import { BookListComponent } from '../components/book-list/book-list.component';
import { selectBookCollection, selectBooks } from '../store/books.selectors';
import { BooksActions, BooksApiActions } from '../store/books.actions';
import { GoogleBooksService } from '../books.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'integrated-angular-book-management',
  standalone: true,
  imports: [CommonModule, BookCollectionComponent, BookListComponent],
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.scss']
})
export class BookManagementComponent {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList())
      );
  }
}
