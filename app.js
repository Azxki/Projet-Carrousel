const slideCreate = document.createElement('li');
const slideCreate2 = document.createElement('li');
const slideCreate3 = document.createElement('li');
const slideCreate4 = document.createElement('li');
const slidesContainer = document.getElementById("slides-ul");
const prevButton = document.getElementById("slide0-bef");
const nextButton = document.getElementById("slide0-ap");
slidesContainer.appendChild(slideCreate);
slidesContainer.appendChild(slideCreate2);
slidesContainer.appendChild(slideCreate3);
slidesContainer.appendChild(slideCreate4);
slideCreate.className = "slide";
slideCreate2.className = "slide";
slideCreate3.className = "slide";
slideCreate4.className = "slide";
const slide = document.querySelector(".slide");

slideCreate.style.backgroundColor = "#efec1f";
slideCreate2.style.backgroundColor = "#8232b0";
slideCreate3.style.backgroundColor = "#47608f";
slideCreate4.style.backgroundColor = "#4c883f";
nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});