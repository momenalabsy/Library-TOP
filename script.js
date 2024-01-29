// get HTML elements
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let add = document.getElementById("add");
let clear = document.getElementById("clear");
let form = document.getElementById("book-form");
let booksContainer = document.getElementById("books-container");
// removeButton = document.getElementsByClassName("remove");
let book = document.getElementsByClassName("book");
// adding the logic and functions

const myLibrary = [];

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}
function addBookToThePage() {
  let container = document.createElement("div");
  let remove = document.createElement("button");

  let p1 = document.createElement("p");
  p1.textContent = `Title: ${title.value}`;
  let p2 = document.createElement("p");
  p2.textContent = `Author: ${author.value}`;
  let p3 = document.createElement("p");
  p3.textContent = `Pages: ${pages.value}`;

  remove.textContent = "X";
  remove.className = "remove";
  container.className = "book";
  container.append(p1);
  container.append(remove);
  container.append(p2);
  container.append(p3);
  booksContainer.append(container);
}
function addBookToLibrary(event) {
  event.preventDefault();
  const newBook = new Book(title.value, author.value, pages.value);
  myLibrary.push(newBook);
  addBookToThePage();
  form.reset();

  booksContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove")) {
      const removeButton = event.target;
      const bookContainer = removeButton.parentElement;
      const bookIndex = Array.from(booksContainer.children).indexOf(
        bookContainer
      );

      if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1);
      }
      bookContainer.remove();
    }
  });
}
form.addEventListener("submit", addBookToLibrary);
