import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: Array<string>;
  };
}

@Component({
  selector: 'integrated-angular-book-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css']
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
}
