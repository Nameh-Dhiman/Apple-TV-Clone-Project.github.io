// ########################## Modal Manipulation ##########################
var signIn = document.querySelector(".sign-in_btn");
var backdrop = document.querySelector(".backdrop");
var closebtn = document.querySelector(".close-modal_btn");
var body = document.querySelector("body");
var modal = document.querySelector(".modal");
var advert = document.querySelector("#advertisement");
var jumboBtn = document.querySelector(".jumbotron-btn");
var iframe = document.querySelector("#modal-iframe");

function openModal() {
  backdrop.style.display = "block";
  modal.style.display = "block";
  body.style.overflow = "hidden";
  iframe.src = "sign-in.html";
}

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
  body.style.overflow = "auto";
  iframe.src = "sign-in.html";
}

jumboBtn.addEventListener("click", function () {
  openModal();
  iframe.src = "sign-in.html";
});

advert.addEventListener("click", function () {
  openModal();
  iframe.src = "sign-in.html";
});

signIn.addEventListener("click", function () {
  openModal();
  iframe.src = "sign-in.html";
});

backdrop.addEventListener("click", function () {
  closeModal();
  iframe.src = "sign-in.html";
});

closebtn.addEventListener("click", function () {
  closeModal();
  iframe.src = "sign-in.html";
});

$(document).scroll(function () {
  var myID = document.getElementById("advertisement");
  var footer = document.querySelector("#footer");
  var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 100) {
      myID.className = "advertisement show";
      footer.style.paddingBottom = "5rem";
    } else {
      myID.className = "advertisement hide";
      footer.style.paddingBottom = "";
    }
  };
  window.addEventListener("scroll", myScrollFunc);
});
