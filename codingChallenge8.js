//CODING CHALLENGE 8 & 9 (i mixed both exercises)
/*Let´s assume you need to write simple js code to check if 
the product belongs to electronic category
or has price greater than $100, if so the you want to offer 
a 10% discount to the user
*/

tv = {
    price: 13000,
    category: 'electronics'
};

if(tv.price>=100 && tv.category == 'electronics'){
    document.write("You have a 10% discount!");
}
else      {
    document.write("This tv costs 13000");

}

