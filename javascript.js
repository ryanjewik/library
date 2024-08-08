const myLibrary = [];
var librarySize = 0;

//Book class
class Book{
    constructor(title, author, synopsis, ISBN){
    this.title = title;
    this.author = author;
    this.synopsis = synopsis;
    this.ISBN = ISBN;
    this.read = false;
    }
}

//auto populates some books in the library to save myself some time
function populateLibrary(){
    var book = new Book("percy jackson", "rick riordan", "demigod fights medusa", 1234567890123);
    myLibrary.push(book);
    var book = new Book("the cat in the hat", "dr seuss", "need I explain more??? it's a cat in a hat", 4564564560456);
    myLibrary.push(book);
    var book = new Book("red fish blue fish", "dr seuss", "I can guaruntee there is a red and a blue fish", 1231231231123);
    myLibrary.push(book);
    var book = new Book("lord of the flies", "famous author", "kid stranded on an island and they get barbaric", 7897890789);
    myLibrary.push(book);
}

//adds book to library
function addBookToLibrary(){
    title = String(prompt("What is the book title?"));
    author = String(prompt("Who is the book author?"));
    bool = "";
    while((bool !== 'y') || (bool !== 'n')){ //asks if user has synopsis
        bool = String(prompt("Do you have a book synopsis?(y/n)"));
        if (bool === 'y'){
            synopsis = String(prompt("What is the synopsis?"));
            break;
        }
        else if (bool ==='n'){
            synopsis = "No synopsis available";
            break;
        }else{
            alert("invalid input, please try again");
        }
    }
    
    while(ISBN.length != 13){//checks if book exists already
        ISBN = Number(prompt("What is the ISBN? (must be 13 digits)"));
    }
    let exists = findBook(ISBN);
    if (exists === null){
        alert("book already exists! cancelling addition.");
        return null;
    }else{
        var book = new Book(title, author, synopsis, ISBN);
        myLibrary.push(book);
        librarySize ++;//increase library size
        let message = title + " by " + author + " has been added!" + '\n'
        + "Synopsis: " + synopsis + '\n' + "ISBN: " + ISBN;
        alert(message); //message to user to confirm it worked
    }

    bool = "";
    while((bool !== 'y') || (bool !== 'n')){//allows user to add another book until they say 'n'
        bool = String(prompt("Do you want to add another book? (y/n)"));
        if (bool === 'y'){
            addBookToLibrary();
            break;
        }
        else if (bool ==='n'){
            break;
        }else{
            alert("invalid input, please try again");
        }
    }
}

//removes book from library
function removeBookFromLibrary(ISBNinput){
    let index = findBook(ISBNinput);
    myLibrary.splice(index, 1);
    librarySize--;
}

function findBook(ISBNinput){
    for (let i = 0; i < librarySize; i++){
        if (myLibrary[i].ISBN ===ISBNinput){
            return i;
        }
    }
    return null;
}

function displayBooks(idx){//chooses four books to display to the user
    for (let i = 0; i < display.length; i++){
        display.pop()
    }
    if (librarySize >= 4){
        booksAdded = 0;
        while(booksAdded < 4){
            display.push(myLibrary[idx]);
            idx++;
            if (idx >= librarySize){
                idx = 0;
            }
            booksAdded++;
        }
    }
    
}

populateLibrary();
const display = [];


//addBookToLibrary();
