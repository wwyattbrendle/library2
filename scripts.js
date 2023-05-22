const Library = [];

class Book {
    constructor(title, author, pageCount, isRead){
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.isRead = isRead;
        this.isAppended = false;
    }
    //method to create book element for DOM
    createBookElement() {

        //add conditional to append book to content
        if(this.isAppended === false){
            let div = document.createElement("div");
            div.classList.add("book");
            let title = document.createElement("h3");
            let author = document.createElement("p");
            let pages = document.createElement("p");
            let read = document.createElement("p");
        
            //add content to elements
            title.textContent = this.title;
            author.textContent = this.author;
            pages.textContent = `${this.pageCount} pages`;
            if(this.isRead === true) {
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

            this.isAppended = true;
        }
    }
}

//create object to store document body
/*    newBookButton: document.getElementById("book-button"),
    content: document.getElementById("content"),
    formBody: document.getElementById("form-container"),
    form: document.getElementById("book-form")
} */

//create Body module
const Body = (() => {
    const newBookButton = document.getElementById("book-button");
    const content = document.getElementById("content");
    const formBody = document.getElementById("form-container");
    const form = document.getElementById("book-form");

    // add event listener to book button
    newBookButton.addEventListener("click", function() {
        formBody.style = "display: flex";
    });

    //add event listener to submit button to bring whole thing together
    form.addEventListener("submit", function(event){
        event.preventDefault();
        addBook();
        Library.forEach((elem) => elem.createBookElement());
        formBody.style = "display: none";
        Form.title.value = "";
        Form.author.value = "";
        Form.pages.value = "";
        Form.isRead.checked = false;
    });
    return {
        content,
    }
})();


/*Body.newBookButton.addEventListener("click", function() {
    Body.formBody.style = "display: flex";
}); */

//create object for form elements


//create module for Form
const Form = (() => {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("page-count");
    const isRead = document.getElementById("read-status");
    const submitButton = document.getElementById("submit-button");
    return {
        title,
        author,
        pages,
        isRead,
        submitButton,
    }
})();

/*
const Form = {
    title: document.getElementById("title"),
    author: document.getElementById("author"),
    pages: document.getElementById("page-count"),
    isRead: document.getElementById("read-status"),
    submitButton: document.getElementById("submit-button")
} */

//create function to create book and add to array
function addBook() {
    let newBook = new Book(Form.title.value, Form.author.value, Form.pages.value, Form.isRead.checked);
    Library.push(newBook);
}



//add event listener to submit button to bring whole thing together
/* Body.form.addEventListener("submit", function(event){
    event.preventDefault();
    addBook();
    Library.forEach((elem) => elem.createBookElement());
    Body.formBody.style = "display: none";
    Form.title.value = "";
    Form.author.value = "";
    Form.pages.value = "";
    Form.isRead.checked = false;
}); */