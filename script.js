const cardStudy = document.querySelector(".studies");
const cardStudySection = document.querySelector(".studies .aboutSection");
const cardStudyContent = document.querySelector(".studies .aboutContent");


const cardHobbies = document.querySelector(".hobbies");
const cardHobbiesFlip = document.querySelector(".hobbiesCard");

const cardLocation = document.querySelector(".location");
const cardLocationFlip = document.querySelector(".locationCard");


cardStudy.addEventListener("click", () => {
    cardStudySection.classList.toggle("revealContent");
    cardStudy.classList.toggle("scaleUp");
    cardStudy.classList.toggle("scaleDown");
    cardStudyContent.classList.toggle("revealContent");
    cardStudyContent.classList.toggle("unRevealContent");
    cardStudySection.classList.toggle("unRevealContent");
});

cardHobbies.addEventListener("click", () => {
    cardHobbiesFlip.classList.toggle("cardActive");
    cardHobbiesFlip.classList.toggle("cardUnactive");
});

cardLocation.addEventListener("click", () => {
    cardLocationFlip.classList.toggle("cardActive");
    cardLocationFlip.classList.toggle("cardUnactive");
});
