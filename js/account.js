
function viewPassword() {
    var passwordInput = document.getElementById("password");
    var passStatus = document.getElementById("showPass");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";

        passStatus.className = "fas fa-eye-slash";
    } else {
        passwordInput.type = "password";
        passStatus.className = "fas fa-eye";
    }
}

$(function () {

    $("#register").hide(0);
    $("#register").fadeIn(500);

    $('#reg').on('click', function () {
        $("#login").fadeOut(500);

    });

});