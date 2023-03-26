let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));

  var currentOverlay = document.querySelector(".overlay-black.overlay");
  if (currentOverlay) {
    currentOverlay.classList.remove("overlay");
  }
  var newOverlay = document.querySelectorAll(".overlay-black")[n - 1];
  newOverlay.classList.add("overlay");
  // rest of the code
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const sliderContainer = document.querySelector(".slider .rows");
let currentWidth = 0;

btnLeft.addEventListener("click", () => handleClick(20));
btnRight.addEventListener("click", () => handleClick(-20));

function handleClick(num) {
  currentWidth += num;
  if (currentWidth >= 0) {
    currentWidth = 0;
  } else if (currentWidth <= -15) {
    currentWidth = -15;
  }
  sliderContainer.style.marginLeft = `${currentWidth}%`;
}

document.addEventListener("scroll", function () {
  let currentPosition = window.pageYOffset;

  let thongtinPosition = document.getElementById("thongtin");
  let navthongtin = document.querySelector("a[href='#thongtin'");
  let thongsoPosition = document.getElementById("thongso");
  let navthongso = document.querySelector("a[href='#thongso'");
  let thanhphanPosition = document.getElementById("thanhphan");
  let navthanhphan = document.querySelector("a[href='#thanhphan'");
  let huongdanPostion = document.getElementById("huongdan");
  let navhuongdan = document.querySelector("a[href='#huongdan'");
  let danhgiaPostion = document.getElementById("danhgia");
  let navdanhgia = document.querySelector("a[href='#danhgia'");
  



  if (currentPosition >= thongtinPosition.offsetTop) {
    navthongtin.classList.add("first-list");
  }

  if (currentPosition >= thongsoPosition.offsetTop) {
    navthongtin.classList.remove("first-list");
    navthongso.classList.add("first-list");
  } 
  else {
    navthongso.classList.remove("first-list");
  }
  if (currentPosition >= thanhphanPosition.offsetTop) {
    navthongso.classList.remove("first-list");
    navthanhphan.classList.add("first-list");
  } 
  else {
    navthanhphan.classList.remove("first-list");
  }
  if (currentPosition >= huongdanPostion.offsetTop) {
    navthanhphan.classList.remove("first-list");
    navhuongdan.classList.add("first-list");
  }  else {
    navhuongdan.classList.remove("first-list");
  }
  if (currentPosition >= danhgiaPostion.offsetTop) {
    navhuongdan.classList.remove("first-list");
    navdanhgia.classList.add("first-list");
  }  else {
    navdanhgia.classList.remove("first-list");
  }

});

