const myLibrary = [];

class Book {
    constructor() {
        this.title = "";
        this.author = "";
        this.synopsis = "No synopsis available";
        this.read = false;
        this.ISBN = null;
    }
}
function Book(title, author, synopsis, ISBN){
    this.title = title;
    this.author = author;
    this.synopsis = synopsis;
    this.ISBN = ISBN;
    this.read = false;
}

function addBookToLibrary(){
    title = String(prompt("What is the book title?"));
    author = String(prompt("Who is the book author?"));
    bool = "";
    while((bool !== 'y') || (bool !== 'n')){
        synopsisBool = String(prompt("Do you have a book synopsis?(y/n)"));
        if (bool === 'y'){
            synopsis = String(prompt("What is the synopsis?"));
            break;
        }
        else if (bool ==='n'){
            synopsis = "No synopsis available";
            break;
        }else{
            console.log("invalid input, please try again. ")
        }
    }
    bool = "";
    while((bool !== 'y') || (bool !== 'n')){
        bool = String(prompt("Do you have a book ISBN?(y/n)"));
        if (bool === 'y'){
            ISBN = Number(prompt("What is the synopsis?"));
            break;
        }
        else if (bool ==='n'){
            ISBN = "No ISBN available";
            break;
        }else{
            console.log("invalid input, please try again. ")
        }
    }
    Book(title, author, synopsis, ISBN);
}