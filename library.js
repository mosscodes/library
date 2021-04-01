//Todo 

// add a new book button or form depending on the design utilizing the book class

// add an x button to remove the book from the list
// just a note, remove a table by calculating it's spot on the table and removing that index number in the array

// add a button to change its read status

// add localStorage and (maybe) Firebase
// use an alert if no storage is detected and ask the user what they want to use


let myLibrary = [];

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

const tableBody = document.querySelector('tbody')

function generateLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        const row = tableBody.insertRow(i);
        const cell0 = row.insertCell(0);
        const cell1 = row.insertCell(1);
        const cell2 = row.insertCell(2);
        const cell3 = row.insertCell(3);
        const cell4 = row.insertCell(4);
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.innerText = "X";
        deleteBtn.onclick = function() {removeBook(i)};
        cell0.innerText = myLibrary[i].title;
        cell1.innerText = myLibrary[i].author;
        cell2.innerText = myLibrary[i].pages;
        if (myLibrary[i].read === true) {
            cell3.innerText = "Yes";
        }
        else {
            cell3.innerText = "Not, yet";
        }
        cell4.appendChild(deleteBtn);
    }
}

function clearTable() {
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    clearTable();
    generateLibrary();
}

generateLibrary();
