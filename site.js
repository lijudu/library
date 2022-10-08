
const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 'read');
const dune = new Book ('Dune', 'Frank Hebert', 'read');
const kafka = new Book('Kafka on the Shore', 'Haruki Murakami', 'read');

let myLibrary = [hobbit, dune, kafka];

function Book(title, author, status) {
    this.title = title
    this.author = author
    this.status = status
    this.info = function(){
        console.log(title, author, status)
    }
}

function addArray(Book){
    myLibrary.push(Book);
    console.log(myLibrary);
}

const titleContainer = document.getElementById("bookName")
const authorContainer = document.getElementById("authorName")

const newBook = document.createElement("p")
const newBook2 = document.createElement("p")
const newAuthor = document.createElement("p")

// let newEntry = document.createTextNode(myLibrary[1].title);
newBook.innerText = myLibrary[1].title
newAuthor.innerText = myLibrary[1].author;
newBook2.innerText = myLibrary[2].title;


function addBookToLibrary() {
    titleContainer.appendChild(newBook)
    titleContainer.appendChild(newBook2)
    authorContainer.appendChild(newAuthor)
}


addBookToLibrary(myLibrary)




// 1) Create new row when "submit" clicked
// 2) loop through myLibrary and add information (title=column1, author=column2, read=column3, add deleteBTN)
// 3) when "submit" clicked, add to myLibrary 
// 4) delete button 
// 5) change read status to toggle 