
let myLibrary = [];

function Book(title, author, status) {
    this.title = title
    this.author = author
    this.status = status
    this.info = function(){
        console.log(title, author, status)
    }
}

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 'read');
const dune = new Book ('Dune', 'Frank Hebert', 'read');
const kafka = new Book('Kafka on the Shore', 'Haruki Murakami', 'read');

function addArray(Book){
    myLibrary.push(Book);
    console.log(myLibrary);
}

function addBookToLibrary() {
    // do stuff here
}