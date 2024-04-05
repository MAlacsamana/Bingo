// JavaScript code for generating random numbers for each column in the Bingo table

let arrayNumbers = [];

function newNumber(minNumber, maxNumber, usedNumbers) {
    let x;
    do {
        x = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    } while (usedNumbers.includes(x));
    usedNumbers.push(x);
    return x;
}

// Generate random numbers for each column
let usedBNumbers = [];
let BNumber = newNumber(1, 15, usedBNumbers);
arrayNumbers.push(BNumber);

let usedINumbers = [];
let INumber = newNumber(16, 30, usedINumbers);
arrayNumbers.push(INumber);

let usedNNumbers = [];
let NNumber = newNumber(31, 45, usedNNumbers);
arrayNumbers.push(NNumber);

let usedGNumbers = [];
let GNumber = newNumber(46, 60, usedGNumbers);
arrayNumbers.push(GNumber);

let usedONumbers = [];
let ONumber = newNumber(61, 75, usedONumbers);
arrayNumbers.push(ONumber);

// Update the table cells with the generated numbers
document.getElementById("td1").textContent = BNumber;
document.getElementById("td2").textContent = INumber;
document.getElementById("td3").textContent = NNumber;
document.getElementById("td4").textContent = GNumber;
document.getElementById("td5").textContent = ONumber;

// Continue until all cells from td6 to td24 are filled
let cells = ["td6", "td7", "td8", "td9", "td10", "td11", "td12", "td13", "td14", "td15", "td16", "td17", "td18", "td19", "td20", "td21", "td22", "td23", "td24"];

for (let i = 0; i < cells.length; i++) {
    let min, max, usedNumbers;
    switch (cells[i]) {
        case "td6":
        case "td11":
        case "td15":
        case "td20":
            min = 1;
            max = 15;
            usedNumbers = usedBNumbers;
            break;
        case "td7":
        case "td12":
        case "td16":
        case "td21":
            min = 16;
            max = 30;
            usedNumbers = usedINumbers;
            break;
        case "td8":
        case "td":
        case "td17":
        case "td22":
            min = 31;
            max = 45;
            usedNumbers = usedNNumbers;
            break;
        case "td9":
        case "td13":
        case "td18":
        case "td23":
            min = 46;
            max = 60;
            usedNumbers = usedGNumbers;
            break;
        case "td10":
        case "td14":
        case "td19":
        case "td24":
            min = 61;
            max = 75;
            usedNumbers = usedONumbers;
            break;
        default:
            break;
    }
    document.getElementById(cells[i]).textContent = newNumber(min, max, usedNumbers);
}

console.log("Array of random numbers:", arrayNumbers);