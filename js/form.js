function back() {
  var front = document.getElementById("front");
  front.style.transform = "rotateY(180deg)";
  front.style.transition = "0.6s ease-in-out";

  var back = document.getElementById("back");
  back.style.transform = "rotateY(0deg)";
  back.style.transition = "0.6s ease-in-out";
}
function returnTolog() {
  var back = document.getElementById("back");
  back.style.transform = "rotateY(180deg)";
  back.style.transition = "0.6s ease-in-out";

  var front = document.getElementById("front");
  front.style.transform = "rotateY(0deg)";
  front.style.transition = "0.6s ease-in-out";
}

function viewPassword() {
  var passwordInput = document.getElementById("password-field");
  var passStatus = document.getElementById("pass-status");

  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    passStatus.className = "fa fa-eye-slash";
  } else {
    passwordInput.type = "password";
    passStatus.className = "fa fa-eye";
  }
}

// back
$(".toggle-password").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
// front
$(".toggle-password_front").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

function checkpass() {
  var password = document.getElementById("password-field");
  var passconform = document.getElementById("pass_Conform");

  if (passconform.value === password.value) {
    passconform.style.borderBottom = "2px solid green";
  } else {
    passconform.style.borderBottom = "2px solid red";
  }
}
