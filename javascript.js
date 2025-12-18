const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const red = document.createElement("div");
red.classList.add("red");
red.setAttribute("style", "color: red");
red.textContent = "Hey I'm red!";

container.appendChild(red);

const headingTest = document.createElement("h3");
headingTest.classList.add("mini-heading");
headingTest.setAttribute("style", "color: blue; font-weight: 900")
headingTest.textContent = "I'm a blue h3!"

container.appendChild(headingTest)

const div2 = document.createElement("div");
div2.classList.add("div-two")
div2.setAttribute("style", "display: flex; border-color: black; border: 5px; background-color: pink")

container.appendChild(div2);

const headingOne = document.createElement("h1");
headingOne.classList.add("h1-heading");
headingOne.textContent = "I'm in a div!";

div2.appendChild(headingOne);


