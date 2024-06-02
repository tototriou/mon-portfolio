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
    let header = document.querySelector(".navbar ");
    let header2 = document.querySelector(".wrapper-navbar ");
    let menu = document.getElementById("menuInside")
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    menu.style.opacity = 0 + (scrollTop - 100) / 500
    header.style.transition = "opacity 0.5s"
    if (scrollTop > 100) {
        header.style.zIndex = -1
        menu.style.zIndex = 1100
        if (scrollTop > this.window.screen.height / 2) {
            header2.style.position = "fixed"
            header2.style.opacity = 0
            header2.style.transition = "opacity 0s"
        } else {
            header2.style.position = "none"
        }

    } else {
        header.style.opacity = 1
        header.style.zIndex = 1000
        header2.style.opacity = 1
        header.style.zIndex = 2000
        header2.style.position = "none"

    }



});

document.getElementById("menu").addEventListener("change", function () {
    let header = document.querySelector(".wrapper-navbar ");
    let header2 = document.querySelector(".navbar ");

    if (this.checked) {
        header.style.opacity = 1
        header.style.transition = "opacity 1s"
        header.style.zIndex = 1000
        header2.style.opacity = 1
        header2.style.transition = "opacity 1s"
        header2.style.zIndex = 1000
    } else {
        header.style.opacity = 0
        header.style.transition = "opacity 1s"
        header.style.zIndex = -1
        header2.style.opacity = 0
        header2.style.transition = "opacity 1s"
        header2.style.zIndex = -1
    }
});


document.getElementById("nav1").addEventListener("click", function () {
    document.getElementById("menu").checked = false;
});
document.getElementById("nav2").addEventListener("click", function () {
    document.getElementById("menu").checked = false;
});
document.getElementById("nav3").addEventListener("click", function () {
    document.getElementById("menu").checked = false;
});
document.getElementById("nav4").addEventListener("click", function () {
    document.getElementById("menu").checked = false;
});