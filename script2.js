
// Variables 

let menuNavbar = document.getElementById("menu")
let home = document.getElementById("home")
let aboutMe = document.getElementById("about")
let projects = document.getElementById("projects")
let contact = document.getElementById("contact")
let body = document.getElementById("content")
let root = document.documentElement

let centerView = document.querySelector(".center-experience-view")
let myExperience = document.querySelector(".my-experiences")

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


function handleScrollExp(el) {
    // console.log(el.getBoundingClientRect().left - centerView.getBoundingClientRect().left)
    if (el.getBoundingClientRect().left < centerView.getBoundingClientRect().left && el.getBoundingClientRect().right > centerView.getBoundingClientRect().left) {
        el.classList.add("scaleUp")
        el.classList.remove("scaleDown")

    } else {
        el.classList.add("scaleDown")
        el.classList.remove("scaleUp")
    }
}




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




window.addEventListener('scroll', function () {
    document.querySelectorAll(".div-fade-in").forEach(elem => {
        elemBounding = elem.getBoundingClientRect();
        if (elemBounding.top < screen.height)
            elem.classList.add("divFadeIn")
    })
})




document.getElementById("wrapper-wrapper").addEventListener("mouseover", function () {


    const track = document.getElementById("track");

    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

    const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
    }

    const handleOnMove = e => {
        if (track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -50,
            nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        track.dataset.percentage = nextPercentage;


        track.animate({
            transform: `translateX(-125px) translate(${nextPercentage}%, 0)`
        }, { duration: 1200, fill: "forwards" });

        document.querySelector("#wrapper-wrapper").addEventListener("mouseover", function () {
            let centerView = document.querySelector(".center-experience-view")
            document.querySelectorAll(".my-experiences-content").forEach(el => handleScrollExp(el))
        })

        // for (const image of track.getElementsByClassName("my-experiences-content")) {
        //     image.animate({
        //         objectPosition: `${100 + nextPercentage}% center`
        //     }, { duration: 1200, fill: "forwards" });
        // }
    }

    /* -- Had to add extra lines for touch events -- */

    window.onmousedown = e => handleOnDown(e);

    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);

    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);

    window.ontouchmove = e => handleOnMove(e.touches[0]);
})