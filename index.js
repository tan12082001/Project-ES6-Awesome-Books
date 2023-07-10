/* eslint-disable max-classes-per-file */
// imports from the Modules.
import { Activity, storage } from './modules/featureModule.js';
import {
  bookname, authorname, addbutton, few, sec, datedis,
} from './modules/declarationsModule.js';
import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('bookstorage')) {
    const tempstorage = JSON.parse(localStorage.getItem('bookstorage'));
    for (let i = 0; i < tempstorage.length; i += 1) {
      const book = new Activity(tempstorage[i].title, tempstorage[i].author);
      storage.addbook(book);
      book.displaybooks();
    }
  }
});

// event to add book on click on the Add button.
addbutton.addEventListener('click', () => {
  if (bookname.value !== '' || authorname.value !== '') {
    const nbook = new Activity(bookname.value, authorname.value);
    storage.addbook(nbook);
    bookname.value = '';
    authorname.value = '';
    nbook.displaybooks();
    localStorage.setItem('bookstorage', JSON.stringify(storage.bookstorage));
  }
});

// Display sections according to the nav elements
window.addEventListener('DOMContentLoaded', () => {
  sec[0].classList.toggle('active');
});

for (let i = 0; i < few.length; i += 1) {
  few[i].addEventListener('click', () => {
    for (let j = 0; j < sec.length; j += 1) {
      if (i === j) {
        sec[j].style.display = 'block';
      } else {
        sec[j].style.display = 'none';
      }
    }
  });
}

const now = DateTime.now();
const { year } = now;
const date = [];
date.push(now.day);
const hours = now.hour;
if (date[0] === 1 || date[0] === 21 || date[0] === 31) {
  date[0] = `${date}st`;
} else if (date === 2 || date === 22) {
  date[0] = `${date[0]}nd`;
} else {
  date[0] = `${date[0]}th`;
}

const month = { month: 'long' };

export {
  now, year, date, hours, month,
};

datedis.innerHTML = `${now.setLocale('en-US').toLocaleString(month)} ${date[0]} ${year}, ${hours}:${now.minute}:${now.second} ${now.toFormat('a')}`;
