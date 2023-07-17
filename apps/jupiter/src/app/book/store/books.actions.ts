import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { Book } from '../components/book-collection/book-collection.component';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieved Book List': emptyProps(),
    'Retrieved Book List Success': props<{ books: ReadonlyArray<Book> }>(),
    'Retrieved Book List Fail': props<{ books: ReadonlyArray<Book> }>(),
  },
});