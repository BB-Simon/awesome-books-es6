import addBookToDom from './add-book-to-dom.js';
import books, { set } from './store.js';

export default (book) => {
  // Insert new book to dom
  addBookToDom(book);

  // Update book list with new book
  books.push(book);
  set(books);
};