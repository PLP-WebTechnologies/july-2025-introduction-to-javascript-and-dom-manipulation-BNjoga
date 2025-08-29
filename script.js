// script.js

// Part 1: Variable declarations and conditionals
let userName = prompt("Enter your name:");
if (userName) {
    console.log("Hello, " + userName + "!");
} else {
    console.log("Hello, Guest!");
}

// Part 2: Custom functions
function calculateTotal(price, quantity) {
    return price * quantity;
}

function formatString(str) {
    return str.trim().toUpperCase();
}

// Example usage of the functions
let total = calculateTotal(10, 5);
console.log("Total: $" + total);
let formattedName = formatString(userName);
console.log("Formatted Name: " + formattedName);

// Part 3: Loop examples
// Example 1: For loop
for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
}

// Example 2: While loop
let countdown = 5;
while (countdown > 0) {
    console.log("Countdown: " + countdown);
    countdown--;
}

// Part 4: DOM interactions
document.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = "Welcome to the JavaScript Fundamentals Assignment!";

    const button = document.getElementById("toggleButton");
    button.addEventListener("click", () => {
        const content = document.getElementById("content");
        content.classList.toggle("hidden");
    });

    const list = document.getElementById("itemList");
    const items = ["Item 1", "Item 2", "Item 3"];
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
});