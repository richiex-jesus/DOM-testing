let link = document.querySelector("a");

link.addEventListener("click", (event) => {
    console.log(event);
    event.preventDefault();
})