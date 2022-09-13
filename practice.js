alert("Hello, How are you? Just click on ok");

var likeMeat = true;
var Num = 5;
var myAge = 22;

//about meat
if (likeMeat == true) {
    document.write("You like meat");

}else {

    document.write("You hate meat");

}

//true false number
if (Num == 5) {
    document.write("It's correct");

} else {

    document.write("It's false");
}

// else if statement for Age
if (myAge >= 20) {

    document.write("Your age is more than or equal to 20");

} else if (myAge > 10) {

    document.write("Your age is over 10");

} else {

    document.write("Your age is not over 10");
}

//Logical Operators

if (myAge < 18 || myAge > 30 || myAge === 18)
{
    document.write("You aint coming dude!");

} else {
    document.write("You can come bro!");
}