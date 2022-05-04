// Navbar

const btnhamburger = document.querySelector('#btnHamburger');
const html = document.querySelector('html');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnhamburger.addEventListener('click', function () {
  console.log('click hamburger');

  if (header.classList.contains('open')) { // Close hamburger menu
    html.classList.remove('noscroll');
    body.classList.remove('noscroll');
    header.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
  }
  else { // Open hamburger menu
    html.classList.add('noscroll');
    body.classList.add('noscroll');
    header.classList.add('open');
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
  }
});

//Navbar hide

const nav = document.querySelector(".flex-nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
  } else {
    nav.classList.remove("nav--hidden");
  }

  lastScrollY = window.scrollY;
});

// Reveal Website elements on scroll

window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }

  }
}

// Scroll to Top Button

const toTop = document.querySelector("#btnScrollToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


// Footer date

document.getElementById("js-year").innerHTML = new Date().getFullYear();

// REALIZACJE PAGES Gallery

const gallery = document.querySelectorAll(".gallery .gallery-image"),
  previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  previewName = previewBox.querySelector(".nazwa-zdjecia"),
  previewOpis = previewBox.querySelector(".opis-zdjecia"),
  closeIcon = previewBox.querySelector(".details"),
  closeBody = document.querySelector(".shadow"),
  currentImg = previewBox.querySelector(".current-img"),
  totalImg = previewBox.querySelector(".total-img"),
  shadow = document.querySelector(".shadow");

window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
    totalImg.textContent = gallery.length;
    let newIndex = i;
    let clickImgIndex;
    gallery[i].onclick = () => {
      clickImgIndex = newIndex;
      console.log(i);
      if (window.innerWidth > 555) {
        function preview() {
          currentImg.textContent = newIndex + 1;
          previewName.textContent = gallery[newIndex].querySelectorAll('.nazwa-foto h1')[0].innerHTML;
          previewOpis.textContent = gallery[newIndex].querySelectorAll('.nazwa-foto p')[0].innerHTML;
          let selectedImgUrl = gallery[newIndex].querySelector("img").src;
          previewImg.src = selectedImgUrl;
        }
      };

      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");

      if (newIndex == 0) {
        prevBtn.style.display = "none";
      }
      if (newIndex >= gallery.length - 1) {
        nextBtn.style.display = "none";
      }
      prevBtn.onclick = () => {
        newIndex--;
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = "none";
        } else {
          preview();
          nextBtn.style.display = "block";
        }
      }

      nextBtn.onclick = () => {
        newIndex++;
        if (newIndex >= gallery.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          preview();
          prevBtn.style.display = "block";
        }
      }

      preview();
      previewBox.classList.add("show");
      shadow.style.display = "block";
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector("html").style.overflow = "hidden";

      closeIcon.onclick = () => {
        newIndex = clickImgIndex;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove("show");
        shadow.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
        document.querySelector("html").style.overflow = "auto";
      }

      closeBody.onclick = () => {
        newIndex = clickImgIndex;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove("show");
        shadow.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
        document.querySelector("html").style.overflow = "auto";
      }
    }
  }
}