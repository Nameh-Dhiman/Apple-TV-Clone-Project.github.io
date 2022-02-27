var signInData = JSON.parse(localStorage.getItem("signInData")) || [];

var parentDocument = window.parent.document;
var iframe = parentDocument.querySelector("#modal-iframe");

var form = document.querySelector("#forgot-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var email = form.forgotEmail.value;
  var password = form.forgotPass.value;
  var flag = false;
  for (var i = 0; i < signInData.length; i++) {
    if (signInData[i].email == email) {
      signInData[i].pass = password;
      flag = true;
      break;
    }
  }
  if (flag) {
    alert("Password Changed");
    localStorage.setItem("signInData", JSON.stringify(signInData));
    window.location.reload();
    iframe.src = "sign-in.html";
  } else {
    alert("Enter Valid Apple ID");
  }
});
