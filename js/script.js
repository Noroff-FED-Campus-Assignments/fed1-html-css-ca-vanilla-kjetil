/* I don't remember where I found this functionality - I didn't write it myself */

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

// Toggle the 'active' class on click
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
