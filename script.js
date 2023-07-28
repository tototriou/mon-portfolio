const cardStudy = document.querySelector(".studies");
const cardStudyFlip = document.querySelector(".studiesCard");

const cardHobbies = document.querySelector(".hobbies");
const cardHobbiesFlip = document.querySelector(".hobbiesCard");

const cardLocation = document.querySelector(".location");
const cardLocationFlip = document.querySelector(".locationCard");


cardStudy.addEventListener("click", () => {
    cardStudyFlip.classList.toggle("cardActive");
    cardStudyFlip.classList.toggle("cardUnactive");
});

cardHobbies.addEventListener("click", () => {
    cardHobbiesFlip.classList.toggle("cardActive");
    cardHobbiesFlip.classList.toggle("cardUnactive");
});

cardLocation.addEventListener("click", () => {
    cardLocationFlip.classList.toggle("cardActive");
    cardLocationFlip.classList.toggle("cardUnactive");
});
