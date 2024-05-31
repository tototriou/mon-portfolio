// window.onscroll = function () { myFunction() };




// function myFunction() {
//     const nav1 = document.querySelector("#nav1")
//     const navbar = document.querySelector(".navbar")

//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         navbar.classList.remove("fadeIn")
//         navbar.classList.add("fadeOut")

//     } else {
//         navbar.classList.remove("fadeOut")
//         navbar.classList.add("fadeIn")

//     }
// };

// function setHide() {
//     document.documentElement.style.setProperty("--pseudo-class-nav", 'hidden');
//     console.log('ok')
//     // ^^^^^^^^^^^-- select the root 
// }

// function setVisible() {
//     document.documentElement.style.setProperty("--pseudo-class-nav", 'visible');
//     // ^^^^^^^^^^^-- select the root 
// }

window.addEventListener("scroll", function () {
    let header = document.querySelector("#navbar");
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    console.log(scrollTop)
    header.style.opacity = 1 - (scrollTop - 100) / 200
});