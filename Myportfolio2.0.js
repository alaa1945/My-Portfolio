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

// Text typing animation
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "a Frontend Developer?";
  }, 0);
  setTimeout(() => {
    text.textContent = "an Email Developer?";
  }, 6000);
}

textLoad();
setInterval(textLoad, 12000);
// End Text typing animation

// Projects filtering

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("projects_btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


document.getElementById("websites").click();//the websites button is clicked by default

// End Projects Filtering

// Slider
const productContainers = [...document.querySelectorAll('.service-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerWidth = 320;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })
});

// End slider


// skills animation
var lang = {
  html: "100%",
  css: "100%",
  sql: "90%",
  java: "70%",
  php: "55%",

};

var multiply = 4;

$.each(lang, function (language, pourcent) {
  var delay = 700;

  setTimeout(function () {
    $("#" + language + "-pourcent").html(pourcent);
  }, delay * multiply);

  multiply++;
});

// end skills animation

// Toggle dark mode 
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark");

  //change the logo on dark theme
  let logoimg = document.getElementById("mylogo");

  if (element.classList == "dark") {
    logoimg.src = "./Myportfolio2.0images/darkthemelogo.png";
  } else {
    logoimg.src = "./Myportfolio2.0images/mainlogo.png";
  }

}
