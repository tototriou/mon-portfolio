const cardStudy = document.querySelector(".studies");
const cardStudySection = document.querySelector(".studies .aboutSection");
const cardStudyContent = document.querySelector(".studies .aboutContent");
const studyBtn = document.querySelector(".studies .btnOpen");
const studyBtnClose = document.querySelector(".studies .btnClose");

studyBtn.addEventListener("click", () => {
    cardStudySection.classList.toggle("revealContent");
    cardStudy.classList.toggle("scaleUp");
    cardStudy.classList.toggle("scaleDown");
    cardStudyContent.classList.toggle("revealContent");
    cardStudyContent.classList.toggle("unRevealContent");
    cardStudySection.classList.toggle("unRevealContent");
});

studyBtnClose.addEventListener("click", () => {
    cardStudySection.classList.toggle("revealContent");
    cardStudy.classList.toggle("scaleUp");
    cardStudy.classList.toggle("scaleDown");
    cardStudyContent.classList.toggle("revealContent");
    cardStudyContent.classList.toggle("unRevealContent");
    cardStudySection.classList.toggle("unRevealContent");
});



const cardHobby = document.querySelector(".hobbies");
const cardHobbySection = document.querySelector(".hobbies .aboutSection");
const cardHobbyContent = document.querySelector(".hobbies .aboutContent");
const hobbyBtn = document.querySelector(".hobbies .btnOpen");
const hobbyBtnClose = document.querySelector(".hobbies .btnClose");

hobbyBtn.addEventListener("click", () => {
    cardHobbySection.classList.toggle("revealContent");
    cardHobby.classList.toggle("scaleUp");
    cardHobby.classList.toggle("scaleDown");
    cardHobbyContent.classList.toggle("revealContent");
    cardHobbyContent.classList.toggle("unRevealContent");
    cardHobbySection.classList.toggle("unRevealContent");
});
hobbyBtnClose.addEventListener("click", () => {
    cardHobbySection.classList.toggle("revealContent");
    cardHobby.classList.toggle("scaleUp");
    cardHobby.classList.toggle("scaleDown");
    cardHobbyContent.classList.toggle("revealContent");
    cardHobbyContent.classList.toggle("unRevealContent");
    cardHobbySection.classList.toggle("unRevealContent");
});


const cardLocation = document.querySelector(".location");
const cardLocationSection = document.querySelector(".location .aboutSection");
const cardLocationContent = document.querySelector(".location .aboutContent");
const locationBtn = document.querySelector(".location .btnOpen");
const locationBtnClose = document.querySelector(".location .btnClose");




locationBtn.addEventListener("click", () => {
    cardLocationSection.classList.toggle("revealContent");
    cardLocation.classList.toggle("scaleUp");
    cardLocation.classList.toggle("scaleDown");
    cardLocationContent.classList.toggle("revealContent");
    cardLocationContent.classList.toggle("unRevealContent");
    cardLocationSection.classList.toggle("unRevealContent");
});


locationBtnClose.addEventListener("click", () => {
    cardLocationSection.classList.toggle("revealContent");
    cardLocation.classList.toggle("scaleUp");
    cardLocation.classList.toggle("scaleDown");
    cardLocationContent.classList.toggle("revealContent");
    cardLocationContent.classList.toggle("unRevealContent");
    cardLocationSection.classList.toggle("unRevealContent");
});

