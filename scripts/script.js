let myLibrary = [];
let idCount = 0;

function Book(author, title, numberOfPages) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.isRead = false;
    this.id = assignId(this);
}

function addBookToLibrary() {
  // do stuff here
}

function assignId(book) {
    book.id = idCount;
    increaseIdCount();
}

function increaseIdCount() {
    idCount += 1;
}

function isRead(book) {
    return book.isRead;
}

function setReadState(book) {
    book.isRead = isRead(book) === false ? true : false;
}