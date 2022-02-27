var signInData = JSON.parse(localStorage.getItem("signInData")) || [];
var person = localStorage.getItem("person");

var parentDocument = window.parent.document;
var body = parentDocument.querySelector("body");
var modal = parentDocument.querySelector(".modal");
var backdrop = parentDocument.querySelector(".backdrop");
var closebtn = parentDocument.querySelector(".close-modal_btn");
var advert = parentDocument.querySelector("#advertisement");
var signBtn = parentDocument.querySelector(".sign-in_btn");

var signBtnText = parentDocument.querySelector("#signin-btn_text");
var jumboBtn = parentDocument.querySelector(".jumbotron-btn");
var jumboInfo = parentDocument.querySelectorAll(".jumbotron-info");
var iframe = parentDocument.querySelector("#modal-iframe");

var passInp = document.querySelector("#password");
var passSubmit = document.querySelector("#passSubmit");

function openModal() {
  backdrop.style.display = "block";
  modal.style.display = "block";
  body.style.overflow = "hidden";
}

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
  body.style.overflow = "auto";
}

passSubmit.addEventListener("click", function () {
  var flag = false;
  for (var i = 0; i < signInData.length; i++) {
    if (signInData[i].pass == passInp.value) {
      flag = true;
      break;
    }
  }
  if (flag) {
    closeModal();
    advert.style.display = "none";
    jumboBtn.style.display = "none";
    jumboInfo.forEach(function (el) {
      el.style.display = "none";
    });
    signBtn.classList.remove("class", "sign-in_btn");
    signBtn.setAttribute("id", "sign-out_btn");
    signBtnText.innerHTML =
      '<i class="fa-solid fa-user fa-sm"></i>&nbsp&nbsp' + person;

    var signOutBtn = parentDocument.querySelector("#sign-out_btn");
    signOutBtn.addEventListener("mouseenter", function () {
      signBtnText.innerHTML =
        '<i class="fa-solid fa-arrow-right-from-bracket"></i>&nbspSign Out';
    });

    signOutBtn.addEventListener("mouseleave", function () {
      signBtnText.innerHTML =
        '<i class="fa-solid fa-user fa-sm"></i>&nbsp&nbsp' + person;
    });

    signOutBtn.addEventListener("mousedown", () => {
      advert.style.display = "";
      jumboBtn.style.display = "block";
      jumboInfo.forEach(function (el) {
        el.style.display = "block";
      });
      signBtn.removeAttribute("id", "sign-out_btn");
      signBtn.classList.add("class", "sign-in_btn");
      iframe.src = "sign-in.html";
      localStorage.removeItem("person");
      signBtnText.innerHTML =
        '<i class="fa-solid fa-user fa-sm"></i>&nbspSign In';
    });
  }
});
