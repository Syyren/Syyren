window.onscroll = function() {
  myFunction();
  myFunctionForPageNav();
};

var topnav = document.getElementById("mynav");
var sticky = topnav.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
      topnav.classList.add("sticky");
  } else {
      topnav.classList.remove("sticky");
  }
}

var card = document.getElementById("pagenav");
var stickyPageNav = card.offsetTop;

function myFunctionForPageNav() {
  if (window.pageYOffset > stickyPageNav) {
      card.classList.add("sticky-pagenav");
  } else {
      card.classList.remove("sticky-pagenav");
  }
}