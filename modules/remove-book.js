import books, { set } from './store.js';

export default (id) => {
  // Remove from the book array
  const parseId = parseInt(id, 10);
  const index = books.findIndex((book) => book.id === parseId);
  books.splice(index, 1);

  // Remove from local storage
  set(books);
};