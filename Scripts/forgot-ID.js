var signInData = JSON.parse(localStorage.getItem("signInData")) || [];

var parentDocument = window.parent.document;
var iframe = parentDocument.querySelector("#modal-iframe");

var form = document.querySelector("#forgot-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var fname = form.forgotfname.value;
  var lname = form.forgotlname.value;
  var bday = form.forgotBday.value;
  var appleID = form.newID.value;
  console.log(fname, lname, bday, appleID);
  var flag = false;
  for (var i = 0; i < signInData.length; i++) {
    if (
      signInData[i].fname == fname &&
      signInData[i].lname == lname &&
      signInData[i].bday == bday
    ) {
      signInData[i].email = appleID;
      flag = true;
      break;
    }
  }
  if (flag) {
    alert("Apple ID Changed");
    localStorage.setItem("signInData", JSON.stringify(signInData));
    window.location.reload();
    iframe.src = "sign-in.html";
  } else {
    alert("Enter Valid Details or Create New Apple ID.");
  }
});
