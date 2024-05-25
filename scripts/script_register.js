let password = document.getElementById('password');
let confirmation = document.getElementById('confirmation');
let eyeicon = document.getElementById('eyeicon');
let eyeiconConfirm = document.getElementById('eyeicon-confirm');

eyeicon.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        eyeicon.src = "../images/eye-open.ico";
    } else {
        password.type = "password";
        eyeicon.src = "../images/eye-closed.ico";
    }
}