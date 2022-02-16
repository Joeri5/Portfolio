const button = document.getElementById("js-button");
const nav = document.getElementById("js-hamburger");
const body = document.getElementById("js-body");
const hero = document.getElementById("js-main-hero");
const icon = document.getElementById("menuicon");
const iconhover = document.getElementById("menuiconhover");
const link = document.getElementById("menulink");

button.onclick = function () {
  nav.style.visibility = "visible";
  nav.style.transitionDuration = "0.8s"
  nav.style.opacity = "1";
  hero.style.visibility = "hidden";
  body.style.overflowY = "hidden";
};

body.onscroll = function () {
  body.style.overflowY = "auto";
  nav.style.visibility = "hidden";
  nav.style.opacity = "0";
  hero.style.visibility = "visible";
};

// window.onscroll = function () {
//   myFunction();
// };

// var navbar = document.getElementById("navbar");
// var list = document.getElementById("navbarlist");
// var navbaritems = document.getElementById("navbaritem");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//     navbar.style.height = "5em";
//     navbar.style.width = "100vw";
//     navbar.style.zIndex = "1";
//     navbar.style.top = "0";
//     navbar.style.background = "#f01e37"
//     navbar.style.opacity = "50%"
//   } else {
//     navbar.classList.remove("sticky");

//   }
// }

// navclose.onclick = function () {
//   nav.style.visibility = "hidden";
//   nav.style.opacity = "0";
//   body.style.overflow = "hidden";
// };

button.onmouseover = function () {
  icon.style.visibility = "hidden";
  iconhover.style.visibility = "visible";
};

button.onmouseleave = function () {
  icon.style.visibility = "visible";
  iconhover.style.visibility = "hidden";
};