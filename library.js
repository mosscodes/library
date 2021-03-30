//Todo 
//Layout basic webpage, taking into consideration where books will go. (I'm thinking a list)
//just a note about above, make sure form uses paralax scrolling

// Write function to loop through myLibrary and display books in table format. Alphebatize by author, then title

// add a new book button or form depending on the design utilizing the book class

// add an x button to remove the book from the list

// add a button to change its read status

// add localStorage and (maybe) Firebase
// use an alert if no storage is detected and ask the user what they want to use


let myLibrary = [{title: "Title1", author: "Author1", pages: 255, read: true}, {title: "Title2", author: "Author2", pages: 555, read: false}];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.readChange = function() {
    if (this.read === true) {
        return this.read === false;
    }
    else {
        return this.read === true;
    }
}

