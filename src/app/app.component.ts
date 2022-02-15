import { Component } from '@angular/core';
import { FirebaseApiService } from './firebase-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  MyBooks: any = [];
  titleValue = "";
  authorValue = "";
  title = "Book Firebase app";

  constructor(public firebaseApiService : FirebaseApiService) { }

  ngOnOnit() {
    this.loadBooks();
  }

  loadBooks() {
    return this.firebaseApiService.getBooks().subscribe((data: {}) => {
      this.MyBooks = data;
    })
  }

  addBook() {
    return this.firebaseApiService.addBook(this.titleValue, this.authorValue).subscribe((data: {}) => {
      this.MyBooks = data;
      this.titleValue = "";
      this.authorValue = "";
    })
  }

  deleteBook(id: string){
    return this.firebaseApiService.deleteBook(id).subscribe((data: {}) => {
      this.MyBooks = data;
    })
  }
}
