for(x = 0; x < 10; x++){

    if(x === 5 || x === 7) {
        continue;
    }

    document.write(x);

    if(x === 9) {
        break;
    }
}
document.write("I'm out of the loop");