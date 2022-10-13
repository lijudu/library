
const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 'read');

let myLibrary = [hobbit];

function Book(title, author, status) {
    this.title = title
    this.author = author
    this.status = status
    this.info = function(){
        console.log(title, author, status)
    }
}


const container = document.getElementById('libraryContainer')
const submitBTN = document.getElementById('submit')



function createBook() {
    let bookTitle = document.getElementById('bookInput').value 
    let authorName = document.getElementById('authorInput').value
    let readBook = document.getElementById('readStatus').value
    const newBook = new Book(bookTitle, authorName, readBook)
    myLibrary.push(newBook)
    console.log(newBook)
    console.log(myLibrary)
}

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
    readStatus.classList.add('readBTN')
    delBook.classList.add('deleteBTN')
    delBook.name = document.getElementById('bookInput').value
    newTitle.id = document.getElementById('bookInput').value
    newDiv.appendChild(newTitle)
    newDiv.appendChild(newAuthor)
    newDiv.appendChild(readStatus)
    newDiv.appendChild(lineBreak)
    newDiv.appendChild(delBook)
    delShow = document.createTextNode('Delete')
    // fill out info in Card (title, author, read, delete)
    let sampleTitle = myLibrary[myLibrary.length - 1].title
    let sampleAuthor = myLibrary[myLibrary.length - 1].author
    let sampleRead = myLibrary[myLibrary.length - 1].status
    readShow = document.createTextNode(sampleRead)
    newTitle.innerText = sampleTitle
    newAuthor.innerText = sampleAuthor
    readStatus.appendChild(readShow)
    delBook.appendChild(delShow)
    
}


submitBTN.addEventListener('click', createLibrary)

function createLibrary() {
    createBook()
    createCard()
}

// delete and read buttons
function hasClass(elem, className) {
    return elem.classList.contains(className)
}


document.addEventListener('click', function(e) {
    if (hasClass(e.target, 'deleteBTN')) {
        e.target.parentElement.remove()
        removeBook = e.target.name
        const removeIndex = myLibrary.findIndex(item => item.title === removeBook)
        myLibrary.splice(removeIndex, 1)
        console.log(myLibrary)
    } else if (hasClass(e.target, 'readBTN')) {
        if (e.target.innerText == 'Unread') {
            e.target.innerText = 'Read'
            console.log('Unread')
        } else if (e.target.innerText == 'Read') {
            e.target.innerText = 'Unread'
            console.log('Read')
        }
    }
}, false)

