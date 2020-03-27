//CODING CHALLENGE 11
/*Consider you want to accept a ten(10) digit number from a user.
Use exception handling in a way that the number entered by the user is exactly ten(10) digits
or throw your own exception*/

number = "1234567890"; //if you add more digits here, it will throw the ERROR

try {
    if(number.length != 10){                            //if this digits are distinct from ten
        throw("Please, enter a ten(10) digits number"); //throw: "Please, enter a ten digits number"
    }
    else{
        document.write(number);
    }
}
catch(e){
    alert("ERROR <br>" + e);
}
finally{
    document.write("<br>This number always going to be executed");
}