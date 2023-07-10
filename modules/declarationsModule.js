// Intializing Variables
const bookstorage = JSON.parse(localStorage.getItem('books-display')) || [];
const bookname = document.getElementById('book-name');
const authorname = document.getElementById('author-name');
const addbutton = document.querySelector('.add-book-button');
const presentbooks = document.querySelector('#books');
const few = document.getElementsByTagName('a');
const sec = document.getElementsByTagName('section');
const datedis = document.querySelector('.currentDate');

export {
  bookstorage, bookname, authorname, addbutton, presentbooks, few, sec, datedis,
};