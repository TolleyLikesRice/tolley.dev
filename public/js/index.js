let scrollSpy = [];

document.querySelectorAll('a[href^="/#"]').forEach((anchor) => {

  // Override click for smooth scroll
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    let target = document.querySelector(this.getAttribute('href').substring(1))
    let offset = 150;
    let targetPosition = target.getBoundingClientRect().top;
    let offsetPosition = targetPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });

  // Scrollspy
  scrollSpy.push({
    anchor: anchor,
    target: document.querySelector(anchor.getAttribute('href').substring(1))
  });
});

navbar = document.getElementById('navbar');
titleDiv = document.getElementById('firstBitTitleThing');

let oldActive = null;
window.addEventListener('scroll', function () {
  // Navbar Show/Hide
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > titleDiv.clientHeight) {
    navbar.classList.add('navbar-shown');
  } else {
    navbar.classList.remove('navbar-shown');
  }

  let closestSection;
  let closestDistance;

  // Scrollspy

  // Find closest section to 150px from top of viewport
  scrollSpy.forEach((item) => {
    let top = item.target.getBoundingClientRect().top - 150;

    if (closestDistance == undefined) {
      closestDistance = top;
      closestSection = item;
    } else if (top > 0 && top <= Math.abs(closestDistance)) {
      closestDistance = top;
      closestSection = item;
    } else if (top < 0 && - top < Math.abs(closestDistance)) {
      closestDistance = top;
      closestSection = item;
    } else if (top == 0) {
      closestDistance = top;
      closestSection = item;
    }
  });

  // Set active class
  if (oldActive) {
    if (oldActive.target.id != closestSection.target.id) {
      oldActive.anchor.classList.remove('navItem-active');
      closestSection.anchor.classList.add('navItem-active');
      oldActive = closestSection;
    }
  } else {
    closestSection.anchor.classList.add('navItem-active');
    oldActive = closestSection;
  }

  console.log(`Closest section: ${closestSection.target.id} (${closestDistance})`);
});