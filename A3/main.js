// Define functions to create each part of the rhombus
// Draw the up-right part of a rhombus
function upRight(height, colorEven, colorOdd, symbol) {
    let output = "";

    for (let i = 1; i <= height; i++) {
        // add spaces
        for (let j = 1; j <= height - i; j++) {
            output += " ";
        }

        // add symbols
        for (let j = 1; j <= i; j++) {
            if (j % 2 === 0) {
                output += `<span style="color:${colorEven}">${symbol}</span>`;
            } else {
                output += `<span style="color:${colorOdd}">${symbol}</span>`;
            }
        }

        output += "<br>";
    }

    return output;
}

// Draw the down-right part of a rhombus
function downRight(height, colorEven, colorOdd, symbol) {
    let output = "";

    for (let i = height; i >= 1; i--) {
        // add spaces
        for (let j = 1; j <= height - i; j++) {
            output += " ";
        }

        // add symbols
        for (let j = 1; j <= i; j++) {
            if (j % 2 === 0) {
                output += `<span style="color:${colorEven}">${symbol}</span>`;
            } else {
                output += `<span style="color:${colorOdd}">${symbol}</span>`;
            }
        }

        output += "<br>";
    }

    return output;
}

// Draw the up-left part of a rhombus
function upLeft(height, colorEven, colorOdd, symbol) {
    let output = "";

    for (let i = 1; i <= height; i++) {
        // add symbols
        for (let j = 1; j <= i; j++) {
            if (j % 2 === 0) {
                output += `<span style="color:${colorEven}">${symbol}</span>`;
            } else {
                output += `<span style="color:${colorOdd}">${symbol}</span>`;
            }
        }

        // add spaces
        for (let j = 1; j <= height - i; j++) {
            output += " ";
        }

        output += "<br>";
    }

    return output;
}

// Draw the down-left part of a rhombus
function downLeft(height, colorEven, colorOdd, symbol) {
    let output = "";

    for (let i = height; i >= 1; i--) {
        // add symbols
        for (let j = 1; j <= i; j++) {
            if (j % 2 === 0) {
                output += `<span style="color:${colorEven}">${symbol}</span>`;
            } else {
                output += `<span style="color:${colorOdd}">${symbol}</span>`;
            }
        }

        // add spaces
        for (let j = 1; j <= height - i; j++) {
            output += " ";
        }

        output += "<br>";
    }

    return output;
}

// Define a function to create the full rhombus
function createRhombus(height, colorEven, colorOdd, symbol) {
    // Call each function to create each part of the rhombus
    document.getElementById("upLeft").innerHTML = upLeft(height, colorEven, colorOdd, symbol);
    document.getElementById("upRight").innerHTML = upRight(height, colorEven, colorOdd, symbol);
    document.getElementById("downLeft").innerHTML = downLeft(height, colorEven, colorOdd, symbol);
    document.getElementById("downRight").innerHTML = downLeft(height, colorEven, colorOdd, symbol);
}