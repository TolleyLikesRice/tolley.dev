navbar = document.getElementById('navbar');
titleDiv = document.getElementById('firstBitTitleThing');

window.addEventListener('scroll', function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > titleDiv.clientHeight) {
    navbar.classList.add('navbar-shown');
  } else {
    navbar.classList.remove('navbar-shown');
  }
});