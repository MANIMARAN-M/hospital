
// Navbar

var navbar = document.querySelector('header')

window.onscroll = function () {

    // pageYOffset or scrollY
    if (window.pageYOffset > 180) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}



let navIcon = document.getElementById("nav-icon1");
let menu = document.querySelector(".nav_menu");


// social icons hover

const triggers = document.querySelectorAll('.fab')
const allMenu = document.querySelectorAll('.menu_item')
const socialMenu = document.querySelectorAll('.nav_social')

function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 200);
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));





navIcon.addEventListener("click", function () {



    this.classList.toggle("open")
    menu.classList.toggle("open_menu")


    allMenu.forEach((element, i) => {
        setTimeout(() => {
            element.classList.toggle("anotherclass");
        }, i * 20);
    });



});





const popMobile = document.querySelector('.pop_mobile');
const closeMobile = document.getElementById('no_button_mobile');

function mobileInsta() {
    popMobile.classList.add("open");
}

setTimeout(mobileInsta, 1440);

closeMobile.addEventListener('click', function () {
    popMobile.classList.remove("open");
});




// POPUP


function onMouseOut(event) {
    // If the mouse is near the top of the window, show the popup
    // Also, do NOT trigger when hovering or clicking on selects
    if (
        event.clientY < 50 &&
        event.relatedTarget == null &&
        event.target.nodeName.toLowerCase() !== 'select') {
        // Remove this event listener
        document.removeEventListener("mouseout", onMouseOut);

        // Show the popup
        document.getElementById("popup").classList.add("mystyle");
    }
}

document.addEventListener("mouseout", onMouseOut);




// POPUP create a button to exit

let bye = document.getElementById("bye_button");



bye.onclick = function () {
    document.getElementById("popup").style.display = "none"
};


let pops = document.getElementById("popup");

pops.onclick = function () {
    document.getElementById("popup").style.display = "none"
};








