// Mendapatkan elemen password dan konfirmasi password
const password = document.getElementById('password');
const confirmation = document.getElementById('confirmation');

// Mendapatkan elemen eyeicon untuk password dan konfirmasi password
const eyeicon = document.getElementById('eyeicon');
const eyeiconConfirm = document.getElementById('eyeicon-confirm');

// Menambahkan event listener untuk mengubah tipe input password
eyeicon.onclick = function () {
    // Jika tipe input password, ubah menjadi teks dan ganti icon ke terbuka
    if (password.type === "password") {
        password.type = "text";
        eyeicon.src = "../images/eye-open.ico";
    } else {
        // Jika tipe input bukan password, ubah menjadi password dan ganti icon ke tertutup
        password.type = "password";
        eyeicon.src = "../images/eye-closed.ico";
    }
}

// Menambahkan event listener untuk mengubah tipe input konfirmasi password
eyeiconConfirm.onclick = function () {
    // Jika tipe input password, ubah menjadi teks dan ganti icon ke terbuka
    if (confirmation.type === "password") {
        confirmation.type = "text";
        eyeiconConfirm.src = "../images/eye-open.ico";
    } else {
        // Jika tipe input bukan password, ubah menjadi password dan ganti icon ke tertutup
        confirmation.type = "password";
        eyeiconConfirm.src = "../images/eye-closed.ico";
    }
}
