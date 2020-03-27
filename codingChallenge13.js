//CODING CHALLENGE 12
/*Consider you want to replace the fruit from apple by some other fruit of your choice*/

message = "I like apple";
pat = /apple/i;

function newFruit(){
    newMessage = message.replace(pat, "pineapple");
    document.write(newMessage);
}

newFruit();

