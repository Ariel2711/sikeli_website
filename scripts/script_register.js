function togglePasswordVisibility(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    icon.onclick = function() {
        if (input.type === "password") {
            input.type = "text";
            icon.src = "../images/eye-open.ico";
        } else {
            input.type = "password";
            icon.src = "../images/eye-closed.ico";
        }
    };
}

togglePasswordVisibility("password", "password-eye-icon");
togglePasswordVisibility("confirmation", "confirmation-eye-icon");

document.getElementById('sign-in-here').addEventListener('mouseover', function() {
    this.style.color = 'blue';
    this.style.cursor = 'pointer';
});

document.getElementById('sign-in-here').addEventListener('mouseout', function() {
    this.style.color = 'black';
});

document.getElementById('sign-in-here').addEventListener('click', function() {
    window.location.href = 'login.html';
});