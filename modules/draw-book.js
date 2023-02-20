import removeBookFromDom from './remove-book-from-dom.js';

const drawBook = (book) => {
  const li = document.createElement('li');
  const titleSpan = document.createElement('span');
  titleSpan.innerText = book.title;
  const authorSpan = document.createElement('span');
  authorSpan.innerText = book.author;

  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove';
  removeBtn.classList.add('remove-btn');
  removeBtn.setAttribute('data-id', book.id);
  removeBtn.addEventListener('click', () => removeBookFromDom(removeBtn));

  li.appendChild(titleSpan);
  li.appendChild(authorSpan);
  li.appendChild(removeBtn);
  return li;
};

export default drawBook;