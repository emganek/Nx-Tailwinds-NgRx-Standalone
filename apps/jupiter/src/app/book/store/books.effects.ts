import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError, switchMap, tap } from 'rxjs/operators';
import { BooksApiActions } from './books.actions';
import { GoogleBooksService } from '../books.service';

@Injectable()
export class BooksEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksApiActions.retrievedBookList),
      switchMap(() =>
        this.bookService.getBooks().pipe(
          map((books) => BooksApiActions.retrievedBookListSuccess({ books })),
          catchError(() => of(BooksApiActions.retrievedBookListFail))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private bookService: GoogleBooksService
  ) {}
}
