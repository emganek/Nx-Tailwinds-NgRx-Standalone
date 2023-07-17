import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'book',
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.routes').then((r) => r.bookRoutes),
    providers: [],
  },
];
