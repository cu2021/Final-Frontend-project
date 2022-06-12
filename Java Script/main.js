//top button start.
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.pageYOffset >= 1450) {
    document.getElementById("top").style.display = "block";
  } else {
    document.getElementById("top").style.display = "none";
  }
}
//top button end.

// the paragraph counter start.
let para1 = "web apps developer with java spring boot";
let i = 0;
let interval;
function increase() {
  document.getElementById("para").innerHTML += para1.charAt(i++);
  if (i == para1.length) {
    clearInterval(interval);
  }
}
interval = setInterval(increase, 70);
// the paragraph counter end.

// the slider start.
let photos = [
  "url(Images/web88.jpg)",
  "url(Images/web100.jpeg)",
  "url(Images/web99.jpg)",
];
let sliderInterval;
let e = 0;

function slider() {
  document.querySelector(".header").style.backgroundImage = photos[e++];

  if (e == photos.length) {
    e = 0;
  }
}
sliderInterval = setInterval(slider, 3000);
// the slider end.

var html = document.getElementById("html");
var width = 1;
var inter = setInterval(html_bar, 34);
function html_bar() {
  if (width > 75) {
    clearInterval(inter);
  } else {
    width++;
    html.style.width = width + "%";
  }
}
html_bar();
//html bar end.

var css = document.getElementById("css");
var width_2 = 1;
var inter_2 = setInterval(css_bar, 50);
function css_bar() {
  if (width_2 > 50) {
    clearInterval(inter_2);
  } else {
    width_2++;
    css.style.width = width_2 + "%";
  }
}
css_bar();
//css bar end.

var JavaScript = document.getElementById("JavaScript");
var width_3 = 1;
var inter_3 = setInterval(Java_Script_bar, 25);
function Java_Script_bar() {
  if (width_3 > 100) {
    clearInterval(inter_3);
  } else {
    width_3++;
    JavaScript.style.width = width_3 + "%";
  }
}
Java_Script_bar();
//js bar end.