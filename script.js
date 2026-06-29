
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(i){
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
}

document.querySelector(".next").addEventListener("click", () => {
    index++;
    if(index >= slides.length) index = 0;
    showSlide(index);
});

document.querySelector(".prev").addEventListener("click", () => {
    index--;
    if(index < 0) index = slides.length - 1;
    showSlide(index);
});

/* AUTO SLIDE */
setInterval(() => {
    index++;
    if(index >= slides.length) index = 0;
    showSlide(index);
}, 4000);
