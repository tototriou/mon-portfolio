
window.addEventListener("scroll", function () {
    let menu = document.getElementById("menuInside")
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    menu.style.opacity = 0 + (scrollTop - 150) / 500

});

document.getElementById("menu").addEventListener("change", function () {
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
});

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



window.addEventListener('scroll', function () {
    document.querySelectorAll(".div-fade-in").forEach(elem => {
        elemBounding = elem.getBoundingClientRect();
        if (elemBounding.top < screen.height)
            elem.classList.add("divFadeIn")
    })
})
