const myLibrary = [];

/*
class Book {
    
}
    */
class Book{
    constructor(title, author, synopsis, ISBN){
    this.title = title;
    this.author = author;
    this.synopsis = synopsis;
    this.ISBN = ISBN;
    this.read = false;
    }
}

function addBookToLibrary(){
    title = String(prompt("What is the book title?"));
    author = String(prompt("Who is the book author?"));
    bool = "";
    while((bool !== 'y') || (bool !== 'n')){
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
            alert("invalid input, please try again");
        }
    }
    var book = new Book(title, author, synopsis, ISBN);
    myLibrary.push(book);

    let message = title + " by " + author + " has been added!" + '\n'
     + "Synopsis: " + synopsis + '\n' + "ISBN: " + ISBN;
    alert(message);

    console.log(title + " by " + author + " has been added!");
    console.log("Summary: " + synopsis);
    console.log("ISBN: " + ISBN);
    bool = "";
    while((bool !== 'y') || (bool !== 'n')){
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
console.log("test");
addBookToLibrary();
