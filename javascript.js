const myLibrary = [];
var librarySize = 0;
const bookDisplay = [];
currIdx = 0;

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
    var book = new Book("book a", "me myself and I", "kyou ha gimu wo yasumimashita", 1236781234561);
    myLibrary.push(book);
    var book = new Book("book b", "nobody", "this is a javascript project that's taking too long", 7983218764324);
    myLibrary.push(book);
    var book = new Book("book c", "random", "hajimemashite hideo to moushimasu", 1234564561231);
    myLibrary.push(book);
    var book = new Book("book d", "on the come up", "test test test", 7899879873211);
    myLibrary.push(book);
    var book = new Book("book e", "kanye west", "uhhh what?", 7650984321231);
    myLibrary.push(book);
    console.log("library populated!");
    librarySize = 9;
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
    console.log("books being changed")
    currIdx += idx;
    if (currIdx < 0){
        currIdx = myLibrary.length - Math.abs(currIdx);
    }else if (currIdx >= myLibrary.length){
        currIdx = 0 + (currIdx - myLibrary.length);
    }

    for (let i = 0; i < 4; i++){
        if (bookDisplay.length > 0){
            bookDisplay.pop();
            console.log("book removed!");
        }
    }
    if (myLibrary.length >= 4){
        let libraryParse = 0;
        for (let i = 0; i < 4; i++){
            if (currIdx + libraryParse >= myLibrary.length){
                currIdx = 0;
                libraryParse = 0;
            }
            bookDisplay.push(myLibrary[currIdx + libraryParse]);
            libraryParse +=1;
            console.log(myLibrary[currIdx + i].title)
            console.log("book added to display!")
        }
    }
    for (let card = 1; card <= bookDisplay.length; card++){
        let num = card -1;
        document.getElementById("b"+ card +"-title").innerHTML = bookDisplay[num].title;
        document.getElementById("b"+card+"-author").innerHTML = bookDisplay[num].author;
        document.getElementById("b"+card+"-synopsis").innerHTML = bookDisplay[num].synopsis;
    }
    console.log(currIdx);
    console.log(bookDisplay.length);
    
}



populateLibrary();
displayBooks(0);


//addBookToLibrary();
