//constructor
function Book(author, title, numberOfPages) {
    this.title = title;
    this.author = author;
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

//global functions
function addBookToLibrary(book) {
    myLibrary.push(book);
}
function assignId(book) {
    book.id = myLibrary.indexOf(book);
}

//declarations
const addBookButton = document.getElementById("add-book-btn");
const modal = document.getElementById("modal");
let myLibrary = [];
const newBook1 = new Book("Mr author", "the title", "200");
const newBook2 = new Book("Mr x", "title x", "300");
const newBook3 = new Book("Mr y", "title y", "400");
const newBook4 = new Book("Mr z", "title z", "500");
console.log(myLibrary);

//event listeners
addBookButton.addEventListener("click", (e) => {
    modal.style.display = modal.style.display === "none" ? "block" : "none";
})