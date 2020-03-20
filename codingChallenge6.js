/*CODING CHALLENGE 6*/
/*
task 1: consider the code var x = "10" & var y = 20, add the above two variables
*/
var x = "10";
var y = 20;
var result = parseInt(x) + y;
document.write(result);

/*
task 2: declare an array of your 5 favourite fruits and list out the 2nd fruit in the array
*/

var fruits = ['Apple', 'Kiwi', 'Banana', 'Tomato', 'Orange']
document.write(fruits[1]);

/*
task 3: add an additional fruit into the current list
*/

var fruits = ['Apple', 'Kiwi', 'Banana', 'Tomato', 'Orange']
fruits.push('Green Apple');
document.write(fruits);

/*
task 4: remove the last element from the list
*/

var fruits = ['Apple', 'Kiwi', 'Banana', 'Tomato', 'Orange']
delete fruits[4];
document.write(fruits);

