/*
o	createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, 
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 * 
 */
export function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
export function findTitles() {
    let titles = [];
    
    for(let obj of library ){
        titles.push(obj.title);
    }
    return titles.sort();
}

/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
export function addBook() {
    const titleElement = document.getElementById("title"); //retrieves the book title textbox element
    const title = titleElement.value;
    console.log("title is: ", title);
   // alert("title:  " + title);

    const newID = library.length + 5000;  // hack to get a unique id for now
    //finish the implementation -- get the author, create a book object, and add to the library array

    const authorElement = document.getElementById("author");
    const author = authorElement.value;
   // alert("author: " + author);
    
    library = [ {title: title, author: author, libraryID: newID} ];
   
    return library;
}

/**
 * 
 * @returns {Array} find all  authors in libraryBooks and return them in alphabetically ordered array.
 */
export function findAuthors() {

let authors = [];
for(let obj of library){
    authors.push(obj.author);
}
return authors.sort();

}

/**
 * 
 * @returns {Array} find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/
export function findIDs() {
let ids = [];
for(let obj of library ){
    ids.push(obj.libraryID);
}
return ids.sort();
}


/**
 * @param {string} title is the title of the book
 * @param {string} author is the author of a book
 * @param {number} libraryID is library ID
 * @returns {Object} new book object
 * createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, 
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
 */
export function createBook(title, author, libraryID){
//implement this
    /*let book={
        title:"My New Book",
        author: "Me Too",
        libraryID: 1144,
    };*/

    let book={
        title: title,
        author: author,
        libraryID: libraryID
    };
    return book;
}

/**
 * 
 * @returns {undefined} 
 */
export function scramble(){
    console.log("implement scramble if you have time ...");

}

  