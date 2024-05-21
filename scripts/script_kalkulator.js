document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', function () {
        const jenisKendaraan = document.querySelector('select[name="jenis"]').value;
        const kwhRumah = parseFloat(document.querySelector('input[name="kwh"]').value);
        const jarakTempuh = parseFloat(document.querySelector('input[name="jarak"]').value);
        const jangkaWaktu = document.querySelector('select[name="waktu"]').value;

        let estimasiBiaya = 0;

        let energiKendaraan = 0;

        if (jenisKendaraan == "Hyundai Kona Electric") {
            energiKendaraan = 64.8 / 345;
        } else if (jenisKendaraan == "Tesla Model 3") {
            energiKendaraan = 82 / 600;
        } else if (jenisKendaraan == "Wuling Air EV") {
            energiKendaraan = 18 / 200;
        } else if (jenisKendaraan == "Gesits") {
            energiKendaraan = 18 / 100;
        } else if (jenisKendaraan == "Alva One") {
            energiKendaraan = 18 / 70;
        } else if (jenisKendaraan == "Selis E-Max") {
            energiKendaraan = 18 / 70;
        }

        let totalEnergi = jarakTempuh * energiKendaraan;

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

        estimasiBiaya = totalEnergi * kwhRumah * jumlahHari;

        const formattedAmount = estimasiBiaya.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });


        const hasilBiaya = document.querySelector('.circle-result h2');
        hasilBiaya.textContent = formattedAmount;

        const hasil = document.querySelector('.square-result h6');
        hasil.textContent = "Estimasi biaya tambahan untuk pengisian baterai Kendaraan " + jenisKendaraan + " per " + jangkaWaktu + " adalah"
    });
});

document.getElementById('resetBtn').addEventListener('click', function () {
    document.getElementsByName('jenis')[0].value = "Hyundai Kona Electric";
    document.getElementsByName('kwh')[0].value = "";
    document.getElementsByName('jarak')[0].value = "";
    document.getElementsByName('waktu')[0].value = "hari";
    document.querySelector('.square-result h6').innerText = "Estimasi biaya tambahan untuk pengisian baterai Kendaraan ..... per ..... adalah";
    document.querySelector('.circle-result h2').innerText = "Rp. 0,00";
});

