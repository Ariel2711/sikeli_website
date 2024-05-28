document.addEventListener("DOMContentLoaded", function () {
    const cardDataBerita = [
        {
            "title": "Neta Buatan Bekasi Belum Lirik Pasar Ekspor",
            "description": "Pabrikan asal China, Neta, tak main-main terjun ke pasar Indonesia. Buktinya salah satu model yang dijual saat ini yaitu Neta V-II sudah diproduksi di Tanah Air.",
            "link": "pages/detail_berita.html",
            "image": "images/slider1.jpg",
            "category": "Mobil Listrik",
            "categoryColor": "success",
            "date": "25 April 2024"
        },
        {
            "title": "ECGO Atasi Kendala Ojol Pakai Motor Listrik, Bisa Jalan 200 Km Sehari",
            "description": "Pengendara ojek online atau ojol saat ini sudah mulai menggunakan sepeda motor listrik. Cuma sebagian besar, memang masih mengandalkan motor bensin konc=vensional.",
            "link": "pages/detail_berita.html",
            "image": "images/slider1.jpg",
            "category": "Mobil Listrik",
            "categoryColor": "primary",
            "date": "20 April 2024"
        },
        {
            "title": "Airlangga Hartarto Bocorkan Status Pabrik Baterai Mobil Listrik Hyundai di RI.",
            "description": "Menteri Koordinator Bidang Perekonomian, Airlangga Hartarto membocorkan status pabrik baterai Hyundai di Indonesia. Tempat pembuatan penyimpan energi untuk mobil listrik itu akan beroperasi dalam waktu dekat.",
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

    const lihatSemuaBerita = `
        <a href="pages/berita.html" class="lihat-semua">
        <h6 class="text-center">Lihat Semuanya</h6>
        </a>
    `;
    cardContainerBerita.innerHTML += lihatSemuaBerita;

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

    const lihatSemuaReview = `
        <a href="pages/review.html" class="lihat-semua">
        <h6 class="text-center">Lihat Semuanya</h6>
        </a>
    `;
    cardContainerReview.innerHTML += lihatSemuaReview;
});
