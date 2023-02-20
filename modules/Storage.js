import Book from './book.js';

class Storage {
  static store = localStorage;

  static get() {
    let books = JSON.parse(this.store.getItem('books')) || [];
    if (Array.isArray(books)) {
      books = books.map((book) => {
        const { title, author, id } = book;
        return new Book(title, author, id);
      });
    }

    return books;
  }

  static set(books) {
    this.store.setItem('books', JSON.stringify(books));
  }
}

export default Storage;