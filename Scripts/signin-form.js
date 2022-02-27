// ########################## Form Data ##########################

var signInData = JSON.parse(localStorage.getItem("signInData")) || [];

var parentDocument = window.parent.document;
var iframe = parentDocument.querySelector("#modal-iframe");

var form = document.querySelector("#myForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var fname = form.fname.value;
  var lname = form.lname.value;
  var bday = form.bday.value;
  var email = form.email.value;
  var pass = form.pass.value;
  var obj = {};
  obj.fname = fname;
  obj.lname = lname;
  obj.bday = bday;
  obj.email = email;
  obj.pass = pass;
  signInData.push(obj);
  localStorage.setItem("signInData", JSON.stringify(signInData));
  iframe.src = "sign-in.html";
});
