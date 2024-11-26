// Function to handle button click
function buttonClick() {
    var resultText = document.getElementById("dynamic_text");
    resultText.innerHTML = "Button was clicked!";
}

// Add event listener to the button
var button = document.getElementById("myButton");
button.addEventListener("click", buttonClick);

// Greet function and variable
let name = "Parker";

function greet(name) {
    return `Hello ${name}!`; // Using template literals correctly
}

console.log(greet(name)); // Logging the greeting message
