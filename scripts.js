const Library = [];

function Book(title, author, pageCount, isRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
    this.isAppended = false;
}

//create object to store document body
const Body = {
    newBookButton: document.getElementById("book-button"),
    content: document.getElementById("content"),
    formBody: document.getElementById("form-container"),
    form: document.getElementById("book-form")
}

// add event listener to book button
Body.newBookButton.addEventListener("click", function() {
    Body.formBody.style = "display: flex";
});

//create object for form elements
const Form = {
    title: document.getElementById("title"),
    author: document.getElementById("author"),
    pages: document.getElementById("page-count"),
    isRead: document.getElementById("read-status"),
    submitButton: document.getElementById("submit-button")
}

//create function to create book and add to array
function addBook() {
    let newBook = new Book(Form.title.value, Form.author.value, Form.pages.value, Form.isRead.checked);
    Library.push(newBook);
}

//function to create book element for DOM
function createBookElement(book) {

    //add conditional to append book to content
    if(book.isAppended === false){
        let div = document.createElement("div");
        div.classList.add("book");
        let title = document.createElement("h3");
        let author = document.createElement("p");
        let pages = document.createElement("p");
        let read = document.createElement("p");
    
        //add content to elements
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = `${book.pageCount} pages`;
        if(book.isRead === true) {
            read.textContent = "read";
            div.classList.add("read");
        } else {
            read.textContent = "not finished";
        }
    
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(read);
        Body.content.appendChild(div);

        book.isAppended = true;
    }
}

//add event listener to submit button to bring whole thing together
Body.form.addEventListener("submit", function(event){
    event.preventDefault();
    addBook();
    Library.forEach(createBookElement);
    Body.formBody.style = "display: none";
    Form.title.value = "";
    Form.author.value = "";
    Form.pages.value = "";
    Form.isRead.checked = false;
});