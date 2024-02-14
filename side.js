// JavaScript
const cross = document.querySelector(".fa-xmark");
const aside = document.querySelector("aside");
const bar = document.querySelector(".bar1");
const body=document.querySelector("body");

bar.style.display = "none";

cross.addEventListener("click", () => {
    aside.classList.add("hidden");
    bar.style.display = "block";
});

bar.addEventListener("click", () => {
    aside.classList.remove("hidden");
    bar.style.display = "none";
});


body.addEventListener("click", (event) => {
    // Check if the clicked element is not a descendant of bar or aside
    if (!bar.contains(event.target) && !aside.contains(event.target)) {
        aside.classList.add("hidden");
        bar.style.display = "block";
    }
});

// Additional code for handling the cross click event if needed
cross.addEventListener("click", () => {
    // Your cross click handling code here
});