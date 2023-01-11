//1
console.log(hello);                                   
var hello = 'world';                                 
//var hello;
//console.log(hello);
//console.log undefined;
//hello = "world";
//______________________________________________________________________//

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//needle = haystack;
//function test(){ //function is being declared
//var needle; //var floats to top like a balloon
//needle = 'magnet' // local scope needle gets assigned a value = 'magnet';
//console.log(needle); // it logs the value of needle when function is called
//test();//function test is called; system console "magnet";
//______________________________________________________________________//

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//var brendan; // brendan is a declaration, it's global and gets hoisted to the top
//function print(){ // function is declared and also gets hoisted;
//brendon = 'only okay'; // variable is hoisted inside local scope;
//logs: 'only okay'; // when/if function is called
//brendan = 'super cool';// assigning a value to the global 'brandon'
//console.log(brendan); // var brendan is called (global var) -> logs 'super cool'
//______________________________________________________________________//


//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//var food; // food is a declaration, it's global and gets hoisted to the top
//function eat(){       // function eat() is a declaration and gets hoisted to the top
//var food;// variable is hoisted inside local scope;
//food = 'half-chicken';// assigning a value to the local scope var 'food'
//console.log(food); // it logs 'half chicken' when function is called
//food reassigned to 'gone'; }

//eat(); // function eat() is called; it logs: half-chicken;
//food = 'chicken';// assigning a value to the global var 'food'
//console.log(food); // logs 'chicken'

//______________________________________________________________________//


//5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// its calling a function called "mean" - but there is no function with that name so it gives an error
//it doesnt read the rest of the code because its an error

//______________________________________________________________________//

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//console.log(genre); //undefined because its searching for the genre and its nowhere above it
//var genre; ----> genre is a declaration, it's global and gets hoisted to the top
//function rewind() { ----> function rewind() is a declaration and gets hoisted to the top
//var genre; ----> genre is a declaration, it's local scope and gets hoisted to the top
//genre = "rock"; --->  assigning a value to the local scope var 'genre'
//console.log(genre); ----> logs the local scope genre 'rock'
//genre = "r&b"; ---> assigning a new value to the local scope var 'genre' now its 'r&b'
//console.log(genre); ----> logs the new local scope genre 'r&b'
//function ends
//genre = 'disco'; ---->  assigning a value to the global var 'genre'
//rewind(); ----> function is being called
//console.log(genre); ----> logs (global genre) 'disco'
//______________________________________________________________________//

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//dojo = san jose;
//console.log(dojo) ---> logs: san jose;
//console.log(dojo) // logs: san jose;
//function learn () ---> function is a declaration and is hoisted to the top
//var dojo; ----> local scope var 'dojo' get hoisted
//dojo = 'seattle'; ---->  assigning a value to the local scope var 'dojo' (seattle)
//console.log(dojo); ----> logs locals scope var (seattle)
//dojo = 'burbank'; ---->  assigning a new value to the local scope var 'dojo' (burbank)
//console.log(dojo); ----> logs new local scope var (burbank)

//learn(); ---> learn function is being called (logs seattle and burbank)
//console.log(dojo); ----> logs (global dojo) 'san jose'
//______________________________________________________________________//