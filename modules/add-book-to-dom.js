import drawBook from './draw-book.js';

const bookContainer = document.querySelector('.book-container');

export default (book) => {
  const li = drawBook(book);
  bookContainer.appendChild(li);
};