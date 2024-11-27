$(".gnb_list").on("mouseenter mouseleave", function (event) {
  if (event.type == "mouseenter") {
    $(this).children(".sub_wrap").stop().slideDown();
  } else {
    $(this).children(".sub_wrap").stop().slideUp(200);
  }
});

const mainSwiper = new Swiper(".mainSlide", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  spaceBetween: 0,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
$(".tab_menu li:first").addClass("select");
$(".best_menu:gt(0)").hide();

$(".tab_menu li").click(function (e) {
  var num = $(this).index();

  e.preventDefault();
  $(".tab_menu li").removeClass("select");
  $(this).addClass("select");

  $(".best_menu").hide();
  $(".best_menu").eq(num).show();
});
const interviewSwiper = new Swiper(".interviewSlide", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  spaceBetween: 0,
});
const interviewRight1 = document.querySelector(".story1 .interview_right");
const interviewRight2 = document.querySelector(".story2 .interview_right");
const interviewRight3 = document.querySelector(".story3 .interview_right");
document.querySelector(".story1").addEventListener("click", function (event) {
  event.preventDefault();
  interviewSwiper.slideTo(0);
  interviewRight1.classList.add("active");
  interviewRight2.classList.remove("active");
  interviewRight3.classList.remove("active");
});

document.querySelector(".story2").addEventListener("click", function (event) {
  event.preventDefault();
  interviewSwiper.slideTo(1);
  interviewRight2.classList.add("active");
  interviewRight1.classList.remove("active");
  interviewRight3.classList.remove("active");
});

document.querySelector(".story3").addEventListener("click", function (event) {
  event.preventDefault();
  interviewSwiper.slideTo(2);
  interviewRight3.classList.add("active");
  interviewRight1.classList.remove("active");
  interviewRight2.classList.remove("active");
});

const elList = document.querySelectorAll(".best_menu_img img");
const elPop = document.querySelector(".pop");
const elPopImg = document.querySelector(".pop_img");
const elPopClose = document.querySelector(".pop_close");
const elTotal = elList.length;
let num = 0;

elList.forEach((thumb, index) => {
  thumb.addEventListener("click", (event) => {
    elPop.classList.add("active");
    elPopImg.src = thumb.src;
    num = idx;
    event.preventDefault();
  });
});
elPopClose.addEventListener("click", (event) => {
  elPop.classList.remove("active");
  event.preventDefault();
});
