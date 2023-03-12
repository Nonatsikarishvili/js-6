"use strict";

let input1 = document.querySelector(".input");
let button1 = document.querySelector(".but-tag");
let ul1 = document.querySelector(".ul");
let formTag = document.querySelector(".form");

formTag.addEventListener("submit", function (event) {
  event.preventDefault();
  let inptValue = input1.value;
  if (inptValue == " ") {
    return;
  }

  // fontawesome
  let iTag = document.createElement("i");
  iTag.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  iTag.style.color = "red";
  iTag.style.marginLeft = "10px";

  iTag.addEventListener("click", function () {
    liTag.remove();
  });

  let liTag = document.createElement("li");
  liTag.textContent = inptValue;
  liTag.style.marginBottom = "5px";
  ul1.appendChild(liTag);

  liTag.appendChild(iTag);

  ul1.style.marginTop = "30px";
  input1.value = " ";

  document.querySelector(".clear").addEventListener("click", function () {
    ul1.innerHTML = " ";
  });
});

// //  header#1

// let navigation = document.querySelector(".navigation");
// let burgerBar = document.querySelector(".burger-div");

// burgerBar.addEventListener("click", function () {
//   navigation.classList.toggle("active");
// });

let navigation = document.querySelector(".navigation");
let burgerBar = document.querySelector(".burger");
let divi = document.querySelectorAll(".div");
let container = document.querySelector(".container");
let navBar = document.querySelector(".nav-bar");

burgerBar.addEventListener("click", function () {
  navigation.classList.toggle("active");
  navBar.classList.toggle("navbaraxali");
  container.classList.toggle("axalicont");

  divi
  divi.forEach((x) => {
    x.classList.toggle("div1");
  });
});
