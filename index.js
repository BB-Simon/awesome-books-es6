import addBookToDom from './modules/add-book-to-dom.js';
import addBook from './modules/add-book.js';
import books from './modules/store.js';
import timeNow from './modules/time-now.js';
import toggleNavLinks from './modules/toggle-nav-links.js';

window.addEventListener('load', () => {
  const timeElement = document.getElementById('time');
  const navLinks = document.querySelectorAll('.nav-link');
  const form = document.querySelector('#add-book');

  navLinks.forEach((link, i) => toggleNavLinks(link, i));

  setInterval(() => {
    timeElement.innerText = timeNow();
  }, 1000);

  books.forEach((book) => addBookToDom(book));

  // function to add newbook
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = form.title.value;
    const author = form.author.value;
    const id = Date.now();
    addBook({ title, author, id });
    form.reset();
  });
});