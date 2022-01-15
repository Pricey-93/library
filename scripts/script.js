//constructor
function Book(author, title, numberOfPages) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.isRead = false;
    this.id = null;
    addBookToLibrary(this);
    assignId(this);
}
//prototype methods
Book.prototype.setReadState = function() {
    this.isRead = this.isRead === false ? true : false;
}
Book.prototype.getInfo = function() {
    return "Author: " + this.author + "\n" + "Title: " + this.title +
    "\n" + "Number of pages: " + this.numberOfPages;  
}

//global functions
function addBookToLibrary(book) {
    myLibrary.push(book);
}
function assignId(book) {
    book.id = myLibrary.indexOf(book);
}
function removeBookFromLibrary(book) {}

//declarations
let myLibrary = [];
const newBook1 = new Book("Mr author", "the title", "200");
const newBook2 = new Book("Mr x", "title x", "300");
const newBook3 = new Book("Mr y", "title y", "400");
const newBook4 = new Book("Mr z", "title z", "500");
console.log(myLibrary);