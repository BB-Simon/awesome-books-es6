import DomManipulator from './dom-manipulator.js';
import Storage from './Storage.js';

class BookList {
  constructor() {
    this.books = Storage.get();
    this.domManipulator = new DomManipulator(this.removeBook.bind(this));
    this.books.forEach((book) => this.domManipulator.insertBookToDom(book));
  }

  addBook(newBook) {
    // Insert new book to dom
    this.domManipulator.insertBookToDom(newBook);

    // Update book list with new book
    this.books.push(newBook);
    Storage.set(this.books);
  }

  removeBook(id) {
    // Remove from the book array
    const parseId = parseInt(id, 10);
    const index = this.books.findIndex((book) => book.id === parseId);
    this.books.splice(index, 1);
    // Remove from local storage
    Storage.set(this.books);
  }
}

export default BookList;