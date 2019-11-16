let myLibrary = [];
let addBook = document.querySelector("#addBook");
var table = document.querySelector("table");
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

var rows = document.querySelectorAll("tr");
console.log(rows);
function clearList() {
  for (var i = 1; i < rows.length; i++) {
    rows[i].parentNode.removeChild(rows[i]);
  }
}

//render list of books
function render() {
  console.log(table.children);
  var rows = document.querySelectorAll("tr");
  //remove prev list (otherwise it will add new list to prev list)
  //starts index 1 so doesn't remove header row
  for (var i = 1; i < rows.length; i++) {
    rows[i].parentNode.removeChild(rows[i]);
  }
  //render new list
  for (var i = 0; i < myLibrary.length; i++) {
    var tr = document.createElement("tr");
    //tr.setAttribute("data-index", `${i}`);
    //tr.textContent = myLibrary[i]["title"];
    tr.innerHTML = `<td>${myLibrary[i]["title"]}
                    <td>${myLibrary[i]["author"]}
                    <td>${myLibrary[i]["pages"]}
                    <td>${myLibrary[i]["read"]}
                    <td><button class="remove">remove</button>
    `;
    table.appendChild(tr);
    console.log(rows);
    //reassign rows to include new row
    rows = document.querySelectorAll("tr");

    //delete button - works I think
    var btn = document.getElementsByClassName("remove");
    for (var i = 0; i < btn.length; i++) {
      btn[i].addEventListener(
        "click",
        function(e) {
          e.target.parentNode.parentNode.parentNode.removeChild(
            e.target.parentNode.parentNode
          );
        },
        false
      );
    }
  }
}

/*var btn = document.querySelector(`.remove`);
btn.addEventListener("click", function() {
  btn.parentNode.parentNode.remove();
});*/

/*var removeButtons = document.querySelector(".remove");
    for (var i = 0; i < removeButtons.length; i++) {
      removeButtons[i].addEventListener("click", function(event) {
        var button = event.target;
        button.parentNode.parentNode.removeChild(button.parentNode);
      });
    }*/
//tr.children[4].style.background = "pink";
