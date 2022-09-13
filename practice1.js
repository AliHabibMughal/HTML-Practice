var Age = 5;
while (Age <= 10) {
    document.write("Your age is less than 10");
    Age++;
    
}
document.write("You are now 10");

var links = document.getElementsByTagName("a");

for (x = 1; x <= links.length; x++) {

    document.write("It's link" + x);
}

document.write("Links Looped");