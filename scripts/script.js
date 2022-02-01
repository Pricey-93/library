//constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
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
function getInputValues() {
    title = document.getElementsByTagName("input")[0].value;
    author = document.getElementsByTagName("input")[1].value;
    pages = document.getElementsByTagName("input")[2].value;
}
function createCard(title, author, pages) {
    bookContainer.append(
    `<div class="${'book-card'}">
        <h3>Title:</h3>
        <p>${title}</p>
        <h3>Author:</h3>
        <p>${author}</p>
        <h3>Pages:</h3>
        <p>${pages}</p>
        <button class="${'remove-book-btn'}">
            Remove Book
        </button>
    </div>`
)}
function createBook() {
    let book = new Book(title, author, pages);
    createCard(book.title, book.author, book.pages);
}

//declarations
const addBookButton = document.getElementById("add-book-btn");
const modal = document.getElementById("modal");
const submitButton = document.getElementById("submit");
let bookContainer = document.getElementById("book-container");
let title = "";
let author = "";
let pages = "";
let myLibrary = [];

//event listeners
addBookButton.addEventListener("click", () => {
    modal.style.display = modal.style.display === "none" ? "block" : "none";
})

submitButton.addEventListener("click", () => {
    getInputValues();
})