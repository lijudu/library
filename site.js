
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

function addArray(){

}

const container = document.getElementById('libraryContainer')
const submitBTN = document.getElementById('submit')

submitBTN.addEventListener('click', createCard)

function createCard(){
    // create new Card
    const newDiv = document.createElement('div')
    container.appendChild(newDiv)
    newDiv.classList.add('newCard')
    // fill out info in Card (title, author, read, delete)
    const newCard = document.querySelectorAll('.newCard')
}


// function addBookToLibrary() {
//     let mandu = myLibrary[0].title
//     newDiv.innerText = mandu
//     container.appendChild(newDiv)
// }


// addBookToLibrary(myLibrary)

