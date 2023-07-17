import { Route } from '@angular/router';
import { provideState } from '@ngrx/store';
import { booksReducer } from './store/books.reducer';
import { collectionReducer } from './store/collection.reducer';
import { provideEffects } from '@ngrx/effects';
import { BooksEffects } from './store/books.effects';

export const bookRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'selection',
  },
  {
    path: 'selection',
    loadComponent: () =>
      import('./book-management/book-management.component').then(
        (c) => c.BookManagementComponent
      ),
    providers: [provideState('books', booksReducer), provideState('collection', collectionReducer), provideEffects(BooksEffects)]
  },
];
