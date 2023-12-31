import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCollectionComponent } from './book-collection.component';

describe('BookCollectionComponent', () => {
  let component: BookCollectionComponent;
  let fixture: ComponentFixture<BookCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BookCollectionComponent]
    });
    fixture = TestBed.createComponent(BookCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
