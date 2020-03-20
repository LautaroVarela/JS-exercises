/* CODING CHALLENGE 03 */

/*
Task 1: 
write js code to display some message to the user, do this by using function
*/

function display() {
    document.write("Hello, user!");
}

/*
Task 2: 
create a function wich would accept a number and calculate its square
*/

function square(x){
    result = x * x ;
    document.write(result);
}
square(9);

/*
Task 3: 
create a function wich would accept 3 numbers and would return the addition of all three of them
*/

function addition(a, b, c){
    return a + b + c;
}
result = addition(40, 50, 180);
document.write(result);