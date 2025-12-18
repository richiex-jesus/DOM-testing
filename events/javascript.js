// method 1: 

// function alertFunction() {
//     alert("YAY, YOU DID IT!");
// }

// function alertFunction() {
//     alert("YAY, YOU DID IT!");
// }

// const btn = document.querySelector("#btn");

// // method 2:
// // btn.onClick = alertFunction;

// // method 3:
// btn.addEventListener("click", function (e) {
//     e.target.style.background = "yellow";


// everything below this line is for attaching listeners to a group of nodes!!

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});


