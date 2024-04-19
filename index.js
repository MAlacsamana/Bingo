console.log("Hello World");
let B = false, 
I = false,
N = false, 
G = false,
O = false;

let BNumber, INumber, NNumber, GNumber, ONumber;

let B1 = 0,
B2 = 0;
B3 = 0,
B4 = 0,
B5 = 0;

let I1 = 0,
I2 = 0;
I3 = 0,
I4 = 0,
I5 = 0;

let N1 = 0,
N2 = 0;
N3 = 0,
N4 = 0,
N5 = 0;

let G1 = 0,
G2 = 0;
G3 = 0,
G4 = 0,
G5 = 0;

let O1 = 0,
O2 = 0;
O3 = 0,
O4 = 0,
O5 = 0;

function newNumber1 (maxNumber) {

   let x = Math.floor(Math.random() * maxNumber) + 1;

    if (x <= 15) {
        if (x != B2 && x != B3 && x != B4 && x != B5) {
        console.log(`Random number ${x} is in "B"`);
        B = true;
        document.querySelector("#B1").textContent = x;
        BNumber = x;
        B1 = x;
        }
    } else if (x >= 16 && x <= 30) {
        if (x != I2 && x != I3 && x != I4 && x != I5) {
        console.log(`Random number ${x} is in "I"`);
        I = true;
        document.querySelector("#I1").textContent = x;
        INumber = x;
        I1 = x;
        }
    } else if (x >= 31 && x <= 45) {
        if (x != N2 && x != N3 && x != N4 && x != N5) {
        console.log(`Random number ${x} is in "N"`);
        N = true;
        document.querySelector("#N1").textContent = x;
        NNumber = x;
        N1 = x;
        }
    } else if (x >= 46 && x <= 60) {
        if (x != G2 && x != G3 && x != G4 && x != G5) {
        console.log(`Random number ${x} is in "G"`);
        G = true;
        document.querySelector("#G1").textContent = x;
        GNumber = x;
        G1 = x;
        }
    } else if (x >= 61 && x <= 75) {
        if (x != O2 && x != O3 && x != O4 && x != O5) {
        console.log(`Random number ${x} is in "O"`);
        O = true;
        document.querySelector("#O1").textContent = x;
        ONumber = x;
        O1 = x;
        }
    } else {
        console.log(`Random number ${x} is invalid.`);
    }

    if (B == true && I==true && N == true && G == true && O == true) {
     console.log(`BINGO!!!`);   
    
    }
}

function newNumber2 (maxNumber) {

   let x = Math.floor(Math.random() * maxNumber) + 1;

    if (x <= 15) {
        if (x != B1 && x != B3 && x != B4 && x != B5) {
        console.log(`Random number ${x} is in "B"`);
        B = true;
        document.querySelector("#B2").textContent = x;
        BNumber = x;
        B2 = x;
        }
    } else if (x >= 16 && x <= 30) {
        if (x != I1 && x != I3 && x != I4 && x != I5) {
        console.log(`Random number ${x} is in "I"`);
        I = true;
        document.querySelector("#I2").textContent = x;
        INumber = x;
        I2 = x;
        }
    } else if (x >= 31 && x <= 45) {
        if (x != N1 && x != N3 && x != N4 && x != N5) {
        console.log(`Random number  ${x} is in "N"`);
        N = true;
        document.querySelector("#N2").textContent = x;
        NNumber = x;
        N2 = x;
        }
    } else if (x >= 46 && x <= 60) {
        if (x != G1 && x != G3 && x != G4 && x != G5) {
        console.log(`Random number ${x} is in "G"`);
        G = true;
        document.querySelector("#G2").textContent = x;
        GNumber = x;
        G2 = x;
        }
    } else if (x >= 61 && x <= 75) {
        if (x != O1 && x != O3 && x != O4 && x != O5) {
        console.log(`Random number ${x} is in "O"`);
        O = true;
        document.querySelector("#O2").textContent = x;
        ONumber = x;
        O2 = x;
        }
    } else {
        console.log(`Random number ${x} is invalid.`);
    }

    if (B == true && I==true && N == true && G == true && O == true) {
     console.log(`BINGO!!!`);   
     
    }
}
function newNumber3 (maxNumber) {

   let x = Math.floor(Math.random() * maxNumber) + 1;

    if (x <= 15) {
        if (x != B1 && x != B2 && x != B4 && x != B5) {
        console.log(`Random number ${x} is in "B"`);
        B = true;
        document.querySelector("#B3").textContent = x;
        BNumber = x;
        B3 = x;
        }
    } else if (x >= 16 && x <= 30) {
        if (x != I1 && x != I2 && x != I4 && x != I5) {
        console.log(`Random number ${x} is in "I"`);
        I = true;
        document.querySelector("#I3").textContent = x;
        INumber = x;
        I3 = x;
        }
    } else if (x >= 31 && x <= 45) {
        if (x != N1 && x != N2 && x != N4 && x != N5) { 
        console.log(`Random number ${x} is in "N"`);
        N = true;
        document.querySelector("#N3").textContent = x;
        NNumber = x;
        N3 = x;
        }
    } else if (x >= 46 && x <= 60) {
        if (x != G1 && x != G2 && x != G4 && x != G5) {
        console.log(`Random number ${x} is in "G"`);
        G = true;
        document.querySelector("#G3").textContent = x;
        GNumber = x;
        G3 = x;
        }
    } else if (x >= 61 && x <= 75) {
        if (x != O1 && x != O2 && x != O4 && x != O5) {
        console.log(`Random number ${x} is in "O"`);
        O = true;
        document.querySelector("#O3").textContent = x;
        ONumber = x;
        O3 = x;
        }
    } else {
        console.log(`Random number ${x} is invalid.`);
    }

    if (B == true && I==true && N == true && G == true && O == true) {
     console.log(`BINGO!!!`);   
   
    }
}
function newNumber4 (maxNumber) {

   let x = Math.floor(Math.random() * maxNumber) + 1;


    if (x <= 15) {
        if (x != B1 && x != B2 && x != B3 && x != B5) {
        console.log(`Random number ${x} is in "B"`);
        B = true;
        document.querySelector("#B4").textContent = x;
        BNumber = x;
        B4 = x;
        }
    } else if (x >= 16 && x <= 30) {
        if (x != I1 && x != I2 && x != I3 && x != I5) {
        console.log(`Random number ${x} is in "I"`);
        I = true;
        document.querySelector("#I4").textContent = x;
        INumber = x;
        I4 = x;
        }
    } else if (x >= 31 && x <= 45) {
        if (x != N1 && x != N2 && x != N3 && x != N5) {
        console.log(`Random number ${x} is in "N"`);
        N = true;
        document.querySelector("#N4").textContent = x;
        NNumber = x;
        N4 = x;
        }
    } else if (x >= 46 && x <= 60) {
        if (x != G1 && x != G2 && x != G3 && x != G5) {
        console.log(`Random number ${x} is in "G"`);
        G = true;
        document.querySelector("#G4").textContent = x;
        GNumber = x;
        G4 = x;
        }
    } else if (x >= 61 && x <= 75) {
        if (x != O1 && x != O2 && x != O3 && x != O5) {
        console.log(`Random number ${x} is in "O"`);
        O = true;
        document.querySelector("#O4").textContent = x;
        ONumber = x;
        O4 = x;
    }
    } else {
        console.log(`Random number ${x} is invalid.`);
    }

    if (B == true && I==true && N == true && G == true && O == true) {
     console.log(`BINGO!!!`);   
    
    }
}
function newNumber5 (maxNumber) {


   let x = Math.floor(Math.random() * maxNumber) + 1;


    if (x <= 15) {
        if (x != B1 && x != B2 && x != B3 && x != B4) {
        console.log(`Random number ${x} is in "B"`);
        B = true;
        document.querySelector("#B5").textContent = x;
        BNumber = x;
        B5 = x;
        }
    } else if (x >= 16 && x <= 30) {
        if (x != I1 && x != I2 && x != I3 && x != I4) {
        console.log(`Random number ${x} is in "I"`);
        I = true;
        document.querySelector("#I5").textContent = x;
        INumber = x;
        I5 = x;
        }
    } else if (x >= 31 && x <= 45) {
        if (x != N1 && x != N2 && x != N3 && x != N4) {
        console.log(`Random number ${x} is in "N"`);
        N = true;
        document.querySelector("#N5").textContent = x;
        NNumber = x;
        N5 = x;
        }
    } else if (x >= 46 && x <= 60) {
        if (x != G1 && x != G2 && x != G3 && x != G4) {
        console.log(`Random number ${x} is in "G"`);
        G = true;
        document.querySelector("#G5").textContent = x;
        GNumber = x;
        G5 = x;
        }
    } else if (x >= 61 && x <= 75) {
        if (x != O1 && x != O2 && x != O3 && x != O4) {
        console.log(`Random number ${x} is in "O"`);
        O = true;
        document.querySelector("#O5").textContent = x;
        ONumber = x;
        O5 =x;
        }
    } else {
        console.log(`Random number ${x} is invalid.`);
    }

    if (B == true && I==true && N == true && G == true && O == true) {
     console.log(`BINGO!!!`);   
   
    }
}


let counter = 5;

while(!B || !I || !N || !G || !O ) {
   
    newNumber1(75);
}
B = false;
I = false;
N = false;
G = false;
O = false;
while(!B || !I || !N || !G || !O ) {
    newNumber2(75);
    
}
B = false;
I = false;
N = false;
G = false;
O = false;
while(!B || !I || !N || !G || !O ) {
    newNumber3(75);
    
}
B = false;
I = false;
N = false;
G = false;
O = false;
while(!B || !I || !N || !G || !O ) {
    newNumber4(75);
    
}
B = false;
I = false;
N = false;  
G = false;
O = false;
while(!B || !I || !N || !G || !O ) {
    newNumber5(75);
    
}
let numColumns = document.querySelectorAll("tr")[0].childElementCount;

cellValues.sort((a, b) => a - b);

let index = 0;
for (let col = 0; col < numColumns; col++) {
    for (let row = 0; row < cellValues.length / numColumns; row++) {
        document.querySelectorAll("td")[row * numColumns + col].textContent = cellValues[index++];
    }
}