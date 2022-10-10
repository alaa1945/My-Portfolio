// Hamburger Menu
const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "rgba(102, 101, 101, 0.4)";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});
// End Hamburger Menu

// Slider
const productContainers = [...document.querySelectorAll(".service-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerWidth = 320;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

// End slider

// Toggle dark mode
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark");

  //change the logo on dark theme
  let logoimg = document.getElementById("mylogo");

  if (element.classList == "dark") {
    logoimg.src = "./Myportfolio2.0images/darkthemelogo.png";
  } else {
    logoimg.src = "./Myportfolio2.0images/lightThemeLogo.png";
  }
}
