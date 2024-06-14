// Event listener untuk memastikan konten DOM telah dimuat sebelum dieksekusi
document.addEventListener("DOMContentLoaded", function () {
    // Mendapatkan elemen tombol submit
    const submitBtn = document.getElementById('submitBtn');

    // Menambahkan event listener ke tombol submit
    submitBtn.addEventListener('click', function () {
        // Mendapatkan nilai dari input fields
        const jenisKendaraan = document.querySelector('select[name="jenis"]').value;
        const kwhRumah = document.querySelector('input[name="kwh"]').value;
        const jarakTempuh = document.querySelector('input[name="jarak"]').value;
        const jangkaWaktu = document.querySelector('select[name="waktu"]').value;

        // Pengecekan validitas input
        if (!kwhRumah) {
            alert("Masukkan data untuk KwH listrik rumah terlebih dahulu");
            return;
        } else if (isNaN(kwhRumah)) {
            alert("Input tidak valid untuk KwH rumah");
            return;
        } else if (!jarakTempuh) {
            alert("Masukkan data untuk jarak tempuh terlebih dahulu");
            return;
        } else if (isNaN(jarakTempuh)) {
            alert("Input tidak valid untuk jarak tempuh");
            return;
        }

        // Fungsi untuk mengonversi string mata uang menjadi angka
        function convertCurrencyToNumber(currencyString) {
            let cleanedString = currencyString.replace(/\./g, '');
            cleanedString = cleanedString.replace(',', '.');
            let number = parseFloat(cleanedString);
            return number;
        }

        // Mengonversi nilai input menjadi angka
        const kwhRumahValue = convertCurrencyToNumber(kwhRumah);
        const jarakTempuhValue = parseFloat(jarakTempuh);

        // Perhitungan estimasi biaya
        let estimasiBiaya = 0;
        let energiKendaraan = 0;

        // Perhitungan berdasarkan jenis kendaraan yang dipilih
        if (jenisKendaraan == "Hyundai Kona Electric") {
            energiKendaraan = 64.8 / 345;
        } else if (jenisKendaraan == "Tesla Model 3") {
            energiKendaraan = 82 / 600;
        } else if (jenisKendaraan == "Wuling Air EV") {
            energiKendaraan = 18 / 200;
        } else if (jenisKendaraan == "Gesits") {
            energiKendaraan = 5 / 100;
        } else if (jenisKendaraan == "Alva One") {
            energiKendaraan = 2.7 / 70;
        } else if (jenisKendaraan == "Selis E-Max") {
            energiKendaraan = 2.9 / 60;
        }

        // Menghitung total energi yang dibutuhkan
        let totalEnergi = jarakTempuhValue * energiKendaraan;

        // Mengonversi durasi waktu menjadi jumlah hari
        let jumlahHari = 0;
        if (jangkaWaktu == "hari") {
            jumlahHari = 1;
        } else if (jangkaWaktu == "minggu") {
            jumlahHari = 7;
        } else if (jangkaWaktu == "bulan") {
            jumlahHari = 30;
        } else if (jangkaWaktu == "tahun") {
            jumlahHari = 365;
        }

        // Menghitung estimasi biaya
        estimasiBiaya = totalEnergi * kwhRumahValue * jumlahHari;

        // Mengformat estimasi biaya sebagai mata uang
        const formattedAmount = estimasiBiaya.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

        // Menampilkan estimasi biaya yang diformat
        const hasilBiaya = document.querySelector('.circle-result h2');
        hasilBiaya.textContent = formattedAmount;

        // Menampilkan pesan hasil
        const hasil = document.querySelector('.square-result h6');
        hasil.textContent = "Estimasi biaya tambahan untuk pengisian baterai Kendaraan " + jenisKendaraan + " per " + jangkaWaktu + " adalah";

        // Menggulir ke bagian hasil untuk layar kecil
        if (window.innerWidth <= 991) {
            var targetElement = document.getElementById('resultKalkulator');
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Event listener untuk tombol reset
document.getElementById('resetBtn').addEventListener('click', function () {
    // Mereset nilai input fields dan pesan hasil
    document.getElementsByName('jenis')[0].value = "Hyundai Kona Electric";
    document.getElementsByName('kwh')[0].value = "";
    document.getElementsByName('jarak')[0].value = "";
    document.getElementsByName('waktu')[0].value = "hari";
    document.querySelector('.square-result h6').innerText = "Estimasi biaya tambahan untuk pengisian baterai Kendaraan ..... per ..... adalah";
    document.querySelector('.circle-result h2').innerText = "Rp. 0,00";
});
