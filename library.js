let myLibrary;

if (localStorage.length === 0) {
    myLibrary = []
}
else {
    let libraryData = localStorage.getItem("Books")
    myLibrary = JSON.parse(libraryData);
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.readChange = function() {
    if (this.read === true) {
        return this.read = false;
    }
    else {
        return this.read = true;
    }
}

const tableBody = document.querySelector('tbody')
const submitBtn = document.getElementById('submit')
submitBtn.onclick = function() {generateBook(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('pages').value, isRead())};

function isRead() {
    return document.getElementById('read').checked
}

function generateLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        const row = tableBody.insertRow(i);
        const cell0 = row.insertCell(0);
        const cell1 = row.insertCell(1);
        const cell2 = row.insertCell(2);
        const cell3 = row.insertCell(3);
        const cell4 = row.insertCell(4);
        const deleteBtn = document.createElement('button');
        const changeBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.innerText = "X";
        deleteBtn.onclick = function() {removeBook(i)};
        changeBtn.type = 'button';
        changeBtn.innerText = "?";
        changeBtn.setAttribute('id', 'read-change-button')
        changeBtn.onclick = function() {changeReadStatus(i)};
        cell0.innerText = myLibrary[i].title;
        cell1.innerText = myLibrary[i].author;
        cell2.innerText = myLibrary[i].pages;
        if (myLibrary[i].read === true) {
            cell3.innerText = "Yes";
        }
        else {
            cell3.innerText = "Not, yet";
        }
        cell3.appendChild(changeBtn);
        cell4.appendChild(deleteBtn);
    }
    localStorage.clear()
    localStorage.setItem("Books", JSON.stringify(myLibrary))
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

function changeReadStatus(index) {
    myLibrary[index].readChange();
    clearTable();
    generateLibrary();
}

function clearForm() {
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('pages').value = "";
    document.getElementById('read').checked = false;
}

function generateBook(title, author, pages, read) {
    if (title === "" || author === "" || pages === "") {
        return;
    }
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
    clearTable();
    clearForm();
    generateLibrary();
}

generateLibrary();

