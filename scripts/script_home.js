document.addEventListener("DOMContentLoaded", function () {
    const cardDataBerita = [
        {
            "title": "Nyaman dan Irit Menjelajahi Trans Jawa Bersama All New Honda CR-V RS e:HEV",
            "description": "All New CR-V RS e:HEV menjadi pilihan karena selain ingin mengeksplorasi potensi mesin hybrid untuk menjelajah Trans Jawa, rangkaian fitur yang dimilikinya juga bisa membuat perjalanan lebih nyaman dan aman. Terutama lewat kehadiran teknologi Honda Sensing yang lengkap, menyediakan ragam fitur keselamatan aktif.",
            "link": "pages/detail_berita.html",
            "image": "images/slider1.jpg",
            "category": "Mobil Listrik",
            "categoryColor": "success",
            "date": "25 April 2024"
        },
        {
            "title": "Road Trip Jakarta - Surabaya Bersama All New Toyota Yaris Cross S HV",
            "description": "Toyota menjadi pabrikan yang aktif menawarkan produk hybrid. Cukup banyak model yang masuk lini keluarga hybrid ditawarkan di Indonesia. Salah satu yang terbaru adalah Yaris Cross. Varian atas dengan menawarkan opsi dengan imbuhan Toyota Hybrid System. Menjadi model yang pas sebagai tes perjalanan jarak jauh sekaligus meninjau jalur mudik. Kami pun memutuskan membawa All New Yaris Cross HEV dari Jakarta menuju Surabaya dalam Electria: Mudik with Hybrid.",
            "link": "pages/detail_berita.html",
            "image": "images/slider1.jpg",
            "category": "Mobil Listrik",
            "categoryColor": "primary",
            "date": "20 April 2024"
        },
        {
            "title": "Mudik Asyik Bareng Suzuki Ertiga Cruise Hybrid Menuju Kota Yogyakarta",
            "description": "Guna menjaga kenyamanan dan efisiensi berkendara ketika melancong jauh, All New Ertiga Hybrid Cruise dimotori oleh mesin berkode K15B. Kemudian dilengkapi teknologi Smart Hybrid Vehicle by Suzuki (SHVS). Kapasitas baterai pun meningkat. Dari 6 Ah menjadi 10 Ah agar memberikan kinerja semakin optimal sebagai mobil rendah emisi dan irit bahan bakar. Bagian ini yang membuat kian mantap buat diajak berkelana dari Jakarta menuju Yogyakarta dengan jarak sejauh lebih kurang 600 km. Selain pengujian, perjalanan ini menjadi simulasi mudik Lebaran 2024.",
            "link": "pages/detail_berita.html",
            "image": "images/slider1.jpg",
            "category": "Berita Umum",
            "categoryColor": "danger",
            "date": "20 April 2024"
        }
    ];

    const cardContainerBerita = document.getElementById('cardContainerBerita');

    cardDataBerita.forEach(data => {
        const cardHTML = `
            <div class="card card-home mb-3 mt-3 card-custom-height-home mx-auto">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${data.image}" class="img-fluid rounded-start img-custom-height-home" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <a href="${data.link}" class="title-berita">
                                <h5 class="card-title-home">${data.title}</h5>
                            </a>
                            <h6 class="card-text-desc-home">${data.description}</h6>
                            <span class="d-flex align-items-center">
                                <span class="square-kategori bg-${data.categoryColor} me-2"></span>
                                <h6 class="text-${data.categoryColor} text-kategori">${data.category}</h6>
                            </span>
                            <p class="card-text-date"><small class="text-muted">${data.date}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        cardContainerBerita.innerHTML += cardHTML;
    });

    const cardDataReview = [
        {
            "title": "Hyundai Kona Electric",
            "description": [
                "Jenis: Sedan kompak",
                "Harga: Rp 675.000.000 (varian Signature)"
            ],
            "link": "/pages/detail_review.html",
            "image": "images/hyundai-kona-electric-.jpg",
            "date": "10 Mei 2024"
        },
        {
            "title": "Tesla Model 3",
            "description": [
                "Jenis: SUV kompak",
                "Harga: Rp 990.000.000 (varian Performance)"
            ],
            "link": "/pages/detail_review.html",
            "image": "images/tesla-model-3-.jpg",
            "date": "5 Mei 2024"
        },
        {
            "title": "Wuling Air EV",
            "description": [
                "Jenis: Hatchback City Car",
                "Harga: Rp243.000.000 (varian Standard Range)"
            ],
            "link": "/pages/detail_review.html",
            "image": "images/Wuling-Air-EV.jpg",
            "date": "1 Mei 2024"
        }
    ];

    const cardContainerReview = document.getElementById('cardContainerReview');

    cardDataReview.forEach(data => {
        const descriptionHTML = data.description.map(desc => `<h6 class="card-text-desc-home">${desc}</h6>`).join('');
        const cardHTML = `
            <div class="card card-home mb-3 mt-3 card-custom-height-home mx-auto">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${data.image}" class="img-fluid rounded-start img-custom-height-home" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <a href="${data.link}">
                                <h5 class="card-title-home">${data.title}</h5>
                            </a>
                            ${descriptionHTML}
                            <p class="card-text-date"><small class="text-muted">${data.date}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        cardContainerReview.innerHTML += cardHTML;
    });
});
