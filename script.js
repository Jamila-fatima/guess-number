

let userNumber = 10;
let counter = 0;
let maxTries = 10;


let randomNumber = Math.floor(Math.random() * userNumber) + 1;


while (attempts != randomNumber) {
    var attempts = prompt("please check a number between 1 and" + userNumber);
    counter += 1;
    if
        (counter > maxTries) {
        document.write("you have no more tries left.press f5 to pla again");
        break
    }
    if
        (attempts == randomNumber) {
        document.write(" congrats you have the ccorrect number ");
        document.write(" <p> the randome number was" + randomNumber + "</p>");
        document.write("<p> it took you" + "  " + counter + "  " + "attempts to get the correcct number.</p>");
    }
    if (attempts > randomNumber) {
        alert("Too high");
    }
    if (attempts < randomNumber) {
        alert("Too low ");

    }
   




}