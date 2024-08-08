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
    ISBN = Number(prompt("What is the ISBN? (must be 13 digits)"));
    if (findBook(ISBN) === -1){
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

//selects which book to manipulate
function bookSelector(num){
    return bookDisplay[num - 1].ISBN;
}

//removes book from library
function removeBookFromLibrary(ISBNinput){
    let index = findBook(ISBNinput);
    myLibrary.splice(index, 1);
    displayBooks(0);
}

//finds book in library based on ISBN
function findBook(ISBNinput){
    for (let i = 0; i < myLibrary.length; i++){
        if (myLibrary[i].ISBN ===ISBNinput){
            return i;
        }
    }
    return -1;
}

//changes status of book between read and unread
function readStatus(ISBNinput){
    let index = findBook(ISBNinput);
    if (myLibrary[index].read === false){
        myLibrary[index].read = true;
    }else{
        myLibrary[index].read = false;
    }
    for (let i = 0; i < 4; i++){
        if (bookDisplay[i].ISBN === ISBNinput){
            if (myLibrary[index].read === true){
                document.getElementById("b" + (i + 1) + "-read").style.backgroundColor = 'rgb(33, 111, 38)';
                document.getElementById("b" + (i + 1) + "-read").style.color = 'white';
                break;
            }else{
                document.getElementById("b" + (i + 1) + "-read").style.backgroundColor = 'white';
                document.getElementById("b" + (i + 1) + "-read").style.color = 'black';
                break;
            }
            

        }
    }
    
}

//selects which books to display to the user
function displayBooks(idx){//chooses four books to display to the user
    currIdx += idx;
    console.log("beginning current index: " + currIdx);
    if (currIdx < 0){
        currIdx = myLibrary.length - Math.abs(currIdx);
    }else if (currIdx >= myLibrary.length){
        currIdx = 0 + (currIdx - myLibrary.length);
    }
    console.log("post conversion current index: " + currIdx);

    for (let i = 0; i < 4; i++){
        if (bookDisplay.length > 0){
            bookDisplay.pop();
        }
    }
    if (myLibrary.length >= 4){
        let libraryParse = 0;
        let resetIdx = currIdx;
        for (let i = 0; i < 4; i++){
            if ((resetIdx + libraryParse) >= (myLibrary.length)){
                resetIdx = 0;
                bookDisplay.push(myLibrary[0]);
            }else{
                bookDisplay.push(myLibrary[resetIdx + libraryParse]);
                libraryParse+=1;
            }
        }
    }
    for (let card = 1; card <= bookDisplay.length; card++){
        let num = card -1;
        document.getElementById("b"+ card +"-title").innerHTML = bookDisplay[num].title;
        document.getElementById("b"+card+"-author").innerHTML = bookDisplay[num].author;
        document.getElementById("b"+card+"-synopsis").innerHTML = bookDisplay[num].synopsis;
        if (bookDisplay[num].read === true){
            document.getElementById("b" + (card) + "-read").style.backgroundColor = 'rgb(33, 111, 38)';
            document.getElementById("b" + (card) + "-read").style.color = 'white';
        }else{
            document.getElementById("b" + (card) + "-read").style.backgroundColor = 'white';
            document.getElementById("b" + (card) + "-read").style.color = 'black';
        }
    }
    console.log("ending current index: " + currIdx);
    
}



populateLibrary();
displayBooks(0);


//addBookToLibrary();
