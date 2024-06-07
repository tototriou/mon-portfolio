
// Variables 

let menuNavbar = document.getElementById("menu")
let home = document.getElementById("home")
let aboutMe = document.getElementById("about")
let projects = document.getElementById("projects")
let contact = document.getElementById("contact")
let body = document.getElementById("content")
let root = document.documentElement

// Functions and methods


function handleCheckMenu() {
    let header = document.querySelector(".wrapper-navbar-fixed");
    let navbar1 = document.querySelector(".navbar");
    let header2 = document.querySelector(" .wrapper-navbar-fixed .navbar ");
    console.log('check')

    if (this.checked) {
        header.style.opacity = 1
        header.style.transition = "opacity 1s"
        header.style.zIndex = 1000
        header2.style.opacity = 1
        header2.style.transition = "opacity 1s"
        header2.style.zIndex = 1000
        navbar1.style.zIndex = -1
        navbar1.style.opacity = 0
        navbar1.style.transition = "opacity 1s"
    } else {
        header.style.opacity = 0
        header.style.transition = "opacity 1s"
        header.style.zIndex = -1
        header2.style.opacity = 0
        header2.style.transition = "opacity 1s"
        header2.style.zIndex = -1
        navbar1.style.zIndex = 110
        navbar1.style.opacity = 1
        navbar1.style.transition = "opacity 1s"
    }
};


// event Listener

window.addEventListener("scroll", function () {
    let menu = document.getElementById("menuInside")
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    menu.style.opacity = 0 + (scrollTop - 150) / 500

    // if (aboutMe.getBoundingClientRect.top > scrollTop)
    // console.log(projects.getBoundingClientRect().top - this.screen.height / 2)
    // console.log(body.getBoundingClientRect().height)

    let percent = Math.round(255 - ((scrollTop + this.screen.height / 2) / body.getBoundingClientRect().height) * 255)
    r = Math.floor(percent);
    let newcolor = ["rgb(", r, ",15,170)"].join("")

    root.style.setProperty('--color-to-get', newcolor)
});

menuNavbar.addEventListener("change", handleCheckMenu);


document.getElementById("nav11").addEventListener("click", function () {
    document.getElementById("menu").checked = false;
    handleCheckMenu()
});
document.getElementById("nav12").addEventListener("click", function () {
    document.getElementById("menu").checked = false;
    handleCheckMenu()
});
document.getElementById("nav13").addEventListener("click", function () {
    document.getElementById("menu").checked = false;
    handleCheckMenu()
});
document.getElementById("nav14").addEventListener("click", function () {
    document.getElementById("menu").checked = false;
    handleCheckMenu()
});

document.querySelector("#wrapper-wrapper").addEventListener("scroll", function () {
    let centerView = document.querySelector(".center-experience-view")
    document.querySelectorAll(".my-experiences-content").forEach(el => {
        console.log(el.getBoundingClientRect().left - centerView.getBoundingClientRect().left)
        if (el.getBoundingClientRect().left < centerView.getBoundingClientRect().left && el.getBoundingClientRect().right > centerView.getBoundingClientRect().left) {
            el.classList.add("scaleUp")
            el.classList.remove("scaleDown")

        } else {
            el.classList.add("scaleDown")
            el.classList.remove("scaleUp")
        }
    })
})


window.addEventListener('scroll', function () {
    document.querySelectorAll(".div-fade-in").forEach(elem => {
        elemBounding = elem.getBoundingClientRect();
        if (elemBounding.top < screen.height)
            elem.classList.add("divFadeIn")
    })
})
