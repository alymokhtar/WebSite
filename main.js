let span = document.querySelector(".up");
window.onscroll = function () {
  if (this.scrollY >= 1000) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};
span.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};

// Start Event
let counter = setInterval(() => {
  let countDown = new Date("Mar 10, 2022 23:59:59").getTime();
  let dateToday = new Date().getTime();
  let diffDate = countDown - dateToday;

  let days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((diffDate % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (diffDate < 0) {
    clearInterval(counter);
  }
}, 1000);
// End Event
// Start Our Skills
let ourSkillsSection = document.getElementById("our-skills");
let spans = document.querySelectorAll(".progress span");
let howItWorkSection = document.getElementById("how-it-work");
let servicesSection = document.getElementById("services");
window.onscroll = function () {
  if (window.scrollY >= ourSkillsSection.offsetTop - 100) {
    spans.forEach((spans) => {
      spans.style.width = spans.dataset.width;
    });
  }
  if (window.scrollY >= howItWorkSection.offsetTop - 100) {
    spans.forEach((spans) => {
      spans.style.width = 0;
    });
  }
  if (window.scrollY <= servicesSection.offsetTop) {
    spans.forEach((spans) => {
      spans.style.width = 0;
    });
  }
};
// End Our Skills
