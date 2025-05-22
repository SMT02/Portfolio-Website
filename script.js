// Sean Tiner 2025
// Submenu -----------------------------------------------------------------------------------------------------------------
const hamburger = document.querySelector(".navHamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("showNavMenu");
  hamburger.classList.toggle("active");
});
// Submenu End -----------------------------------------------------------------------------------------------------------------

// Progress Bar -----------------------------------------------------------------------------------------------------------------
window.onscroll = function() {scrollBar()};

function scrollBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
// Progress Bar End -----------------------------------------------------------------------------------------------------------------

// Scroll Spy (for side nav) -----------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const sections = [
    { id: "about", navId: "sideNavAbout" },
    { id: "education", navId: "sideNavEducation" },
    { id: "projects", navId: "sideNavProjects" },
    { id: "contact", navId: "sideNavContact" },
  ];

  function getOffsetTop(elem) {
    return elem.getBoundingClientRect().top + window.scrollY;
  }

  function onScroll() {
    let scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach(({ id, navId }) => {
      const section = document.getElementById(id);
      const navItem = document.getElementById(navId);

      if (section) {
        const sectionTop = getOffsetTop(section);
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
          navItem.classList.add("activeNav");
        } else {
          navItem.classList.remove("activeNav");
        }
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // Run once on page load
});
// Scroll Spy End -----------------------------------------------------------------------------------------------------------------

// Animations -----------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const animation_elements = document.querySelectorAll('.animateOnScroll, .animateOnScrollRight, .animateOnScrollVertical');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, 
  });

  animation_elements.forEach(el => {
    observer.observe(el);
  });
});
// Animations end -----------------------------------------------------------------------------------------------------------------

// Modal -----------------------------------------------------------------------------------------------------------------
function openModal() {
  document.getElementById("imageModal").style.display = "block";
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
// Modal End -----------------------------------------------------------------------------------------------------------------






