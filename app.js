let myLibrary = [];
let addBook = document.querySelector("#addBook");
var ul = document.querySelector("ul");
var form = document.querySelector("form");
var titleInput = document.querySelector("#title");
var authorInput = document.querySelector("#author");
var pagesInput = document.querySelector("#pages");
var readInput = document.querySelector("#read");
var submit = document.querySelector("#submit");

//Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages}, ${
      this.read === "y" ? "read" : "not read yet"
    }`;
  };
}

//add Book
function addBookToLibrary() {
  var newBook = new Book();
  newBook.title = titleInput.value;
  newBook.author = authorInput.value;
  newBook.pages = pagesInput.value;
  newBook.read = readInput.value;
  myLibrary.push(newBook);
  console.log(myLibrary);
}

//click to add new Book - shows form
addBook.addEventListener("click", function() {
  form.classList.remove("hidden");
  submit.classList.remove("hidden");
});

//adds the book to library and shows list
submit.addEventListener("click", function() {
  form.classList.add("hidden");
  submit.classList.add("hidden");
  addBookToLibrary();
  render();
});

//render list of books
function render() {
  var lis = document.querySelectorAll("li");
  //remove prev list (otherwise it will add new list to prev list)
  for (var i = 0; i < lis.length; i++) {
    ul.removeChild(lis[i]);
  }
  //render new list
  for (var i = 0; i < myLibrary.length; i++) {
    var li = document.createElement("li");
    li.textContent = myLibrary[i]["title"];
    ul.appendChild(li);
  }
}
