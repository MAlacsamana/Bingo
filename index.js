console.log("Hello World.");

function generateRandomNumber () {
    // Return randomnumber 0 to 10;
    let randonNum = Math.floor(Math.random() * 10) + 4;

    // if ...else if ...else statement
    // if (condition) {block of code to execute}
    // =, !, =, >, <, >, =, < =, &&, ||




    if(randonNum > 5){
        console.log(`Random Number is > = to 5`);
    } else {
        console.log(`Random Number is < = to 5`);
    }

    return console.log(randonNum);
}