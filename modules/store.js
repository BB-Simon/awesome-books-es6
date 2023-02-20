const store = localStorage;

export const get = () => JSON.parse(store.getItem('books')) || [];

export const set = (books) => store.setItem('books', JSON.stringify(books));

export default get();
