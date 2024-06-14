// Mendapatkan elemen eyeicon
const eyeicon = document.getElementById("eyeicon");

// Mendapatkan elemen input password
const password = document.getElementById("password");

// Menambahkan event listener untuk mengubah tipe input password
eyeicon.onclick = function () {
    // Jika tipe input adalah password, ubah menjadi teks dan ganti icon ke terbuka
    if (password.type === "password") {
        password.type = "text";
        eyeicon.src = "../images/eye-open.ico";
    }
    // Jika tipe input bukan password, ubah menjadi password dan ganti icon ke tertutup
    else {
        password.type = "password";
        eyeicon.src = "../images/eye-closed.ico";
    }
};
