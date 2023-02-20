import Time from './time.js';

class DomManipulator {
  constructor(removeBook) {
    this.removeBook = removeBook;
    this.bookContainer = document.querySelector('.book-container');
    this.bookContainer.innerHTML = '';
    this.timeElement = document.getElementById('time');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.sections = document.querySelectorAll('.content');
    this.navLinks.forEach((link, i) => this.toggleNavLinks(link, i));

    setInterval(() => {
      this.timeElement.innerText = Time.now();
    }, 1000);
  }

  drawBook(book) {
    this.li = document.createElement('li');
    this.titleSpan = document.createElement('span');
    this.titleSpan.innerText = book.title;
    this.authorSpan = document.createElement('span');
    this.authorSpan.innerText = book.author;

    this.removeBtn = document.createElement('button');
    this.removeBtn.innerText = 'Remove';
    this.removeBtn.classList.add('remove-btn');
    this.removeBtn.setAttribute('data-id', book.id);
    this.removeBtn.addEventListener('click', this.removeBookFromDom.bind({
      btn: this.removeBtn,
      parentUl: this.bookContainer,
      remove: this.removeBook,
    }));

    this.li.appendChild(this.titleSpan);
    this.li.appendChild(this.authorSpan);
    this.li.appendChild(this.removeBtn);
    return this.li;
  }

  insertBookToDom(book) {
    const li = this.drawBook(book);
    this.bookContainer.appendChild(li);
  }

  removeBookFromDom() {
    // remove the book from the dom
    this.li = this.btn.parentNode;
    this.parentUl.removeChild(this.li);

    // Remove from book list
    const id = this.btn.getAttribute('data-id');
    this.remove(id);
  }

  toggleNavLinks(link, index) {
    link.addEventListener('click', () => {
      this.sections.forEach((s, i) => {
        if (index === i) {
          s.style.display = 'block';
        } else {
          s.style.display = 'none';
        }
      });
    });
  }
}

export default DomManipulator;