import removeBook from './remove-book.js';

export default (btn) => {
  // remove the book from the dom
  const li = btn.parentNode;
  const ul = li.parentNode;
  ul.removeChild(li);

  // Remove from book list
  const id = btn.getAttribute('data-id');
  removeBook(id);
};