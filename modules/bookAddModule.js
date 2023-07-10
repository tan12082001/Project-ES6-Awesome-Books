// Books Array class to store books
export default class Books {
  constructor() {
    this.bookstorage = [];
  }

  addbook(book) {
    this.bookstorage.push(book);
  }
}
