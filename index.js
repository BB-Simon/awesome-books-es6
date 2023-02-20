import BookList from './modules/book-list.js';
import Book from './modules/book.js';

const booklist = new BookList();

// function to add newbook
const form = document.querySelector('#add-book');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = form.title.value;
  const author = form.author.value;
  const id = Date.now();
  const newBook = new Book(title, author, id);
  booklist.addBook(newBook);
  form.reset();
});