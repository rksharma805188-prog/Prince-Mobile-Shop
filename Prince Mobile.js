const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

let index = 0;

setInterval(() => {

index++;

if(index >= images.length){
index = 0;
}

const width = document.querySelector(".image-slider").clientWidth;

slides.style.transform = `translateX(-${index * width}px)`;

},5000);

const contactBtn = document.getElementById('contactbtn');
const contactDropdown = document.getElementById('contact-dropdown');

contactBtn.addEventListener('click', () => {
    contactDropdown.classList.toggle('active');
});