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



const trainingTitle = document.querySelector(".studiesNav .training");
const experiencesTitle = document.querySelector(".studiesNav .experiences");
const cvTitle = document.querySelector(".studiesNav .cv");

const trainingSection = document.querySelector(".studiesContent .training-content");
const experiencesSection = document.querySelector(".studiesContent .experiences-content");
const cvSection = document.querySelector(".studiesContent .cv-content");

trainingTitle.addEventListener("click", () => {
    trainingTitle.classList.add("aboutMeActive");
    experiencesTitle.classList.remove("aboutMeActive");
    cvTitle.classList.remove("aboutMeActive");
    trainingSection.classList.add("aboutMeVisible");
    experiencesSection.classList.remove("aboutMeVisible");
    cvSection.classList.remove("aboutMeVisible");

    trainingTitle.classList.remove("aboutMeUnactive");
    experiencesTitle.classList.add("aboutMeUnactive");
    cvTitle.classList.add("aboutMeUnactive");
    trainingSection.classList.remove("aboutMeUnvisible");
    experiencesSection.classList.add("aboutMeUnvisible");
    cvSection.classList.add("aboutMeUnvisible");
});

experiencesTitle.addEventListener("click", () => {
    trainingTitle.classList.remove("aboutMeActive");
    experiencesTitle.classList.add("aboutMeActive");
    cvTitle.classList.remove("aboutMeActive");
    trainingSection.classList.remove("aboutMeVisible");
    experiencesSection.classList.add("aboutMeVisible");
    cvSection.classList.remove("aboutMeVisible");

    trainingTitle.classList.add("aboutMeUnactive");
    experiencesTitle.classList.remove("aboutMeUnactive");
    cvTitle.classList.add("aboutMeUnactive");
    trainingSection.classList.add("aboutMeUnvisible");
    experiencesSection.classList.remove("aboutMeUnvisible");
    cvSection.classList.add("aboutMeUnvisible");
});

cvTitle.addEventListener("click", () => {
    trainingTitle.classList.remove("aboutMeActive");
    experiencesTitle.classList.remove("aboutMeActive");
    cvTitle.classList.add("aboutMeActive");
    trainingSection.classList.remove("aboutMeVisible");
    experiencesSection.classList.remove("aboutMeVisible");
    cvSection.classList.add("aboutMeVisible");

    trainingTitle.classList.add("aboutMeUnactive");
    experiencesTitle.classList.add("aboutMeUnactive");
    cvTitle.classList.remove("aboutMeUnactive");
    trainingSection.classList.add("aboutMeUnvisible");
    experiencesSection.classList.add("aboutMeUnvisible");
    cvSection.classList.remove("aboutMeUnvisible");
});


const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next"  ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});