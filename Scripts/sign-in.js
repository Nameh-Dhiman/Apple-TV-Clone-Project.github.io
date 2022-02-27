var signInData = JSON.parse(localStorage.getItem("signInData")) || [];

var inputID = document.querySelector("#inpID");
var person = undefined;
var appleID = document.querySelector("#submit");
appleID.addEventListener("click", function () {
  var flag = false;
  for (var i = 0; i < signInData.length; i++) {
    if (signInData[i].email == inputID.value) {
      person = signInData[i].fname + " " + signInData[i].lname;
      window.location.href = "login-pass.html";
      flag = true;
      break;
    }
  }
  if (flag == false) {
    alert("Enter a valid Apple ID");
  }
  localStorage.setItem("person", person);
});
