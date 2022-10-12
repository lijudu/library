
const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 'read');
const dune = new Book ('Dune', 'Frank Hebert', 'read');
const kafka = new Book('Kafka on the Shore', 'Haruki Murakami', 'read');

let testarr = [dune,kafka]

let myLibrary = [hobbit];

function Book(title, author, status) {
    this.title = title
    this.author = author
    this.status = status
    this.info = function(){
        console.log(title, author, status)
    }
}

function addArray(book){
    myLibrary.push(book)
}

testarr.forEach((book) => addArray(book));


const container = document.getElementById('libraryContainer')
const submitBTN = document.getElementById('submit')

submitBTN.addEventListener('click', createCard)

function createCard(){
    // create new Card
    const newDiv = document.createElement('div')
    container.appendChild(newDiv)
    newDiv.classList.add('newCard')
    const newTitle = document.createElement('p')
    const newAuthor = document.createElement('p')
    const readStatus = document.createElement('button')
    const delBook = document.createElement('button')
    const lineBreak = document.createElement('br')
    readStatus.id='readBTN'
    delBook.id= 'deleteBTN'
    newDiv.appendChild(newTitle)
    newDiv.appendChild(newAuthor)
    newDiv.appendChild(readStatus)
    newDiv.appendChild(lineBreak)
    newDiv.appendChild(delBook)
    readBTN = document.getElementById('readBTN')
    deleteBTN = document.getElementById('deleteBTN')
    readShow = document.createTextNode('Read')
    delShow = document.createTextNode('Delete')
    // fill out info in Card (title, author, read, delete)
    let sampleTitle = myLibrary[1].title
    let sampleAuthor = myLibrary[1].author
    newTitle.innerText = sampleTitle
    newAuthor.innerText = sampleAuthor
    readStatus.appendChild(readShow)
    delBook.appendChild(delShow)


}


// function addBookToLibrary() {
//     let mandu = myLibrary[0].title
//     newDiv.innerText = mandu
//     container.appendChild(newDiv)
// }


// addBookToLibrary(myLibrary)

