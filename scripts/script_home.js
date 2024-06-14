// Event listener untuk memastikan konten DOM telah dimuat sebelum dieksekusi
document.addEventListener("DOMContentLoaded", function () {
    // Data card untuk bagian berita
    const cardDataBerita = [
        {
            "title": "Neta Buatan Bekasi Belum Lirik Pasar Ekspor",
            "description": "Pabrikan asal China, Neta, tak main-main terjun ke pasar Indonesia. Buktinya salah satu model yang dijual saat ini yaitu Neta V-II sudah diproduksi di Tanah Air.",
            "link": "pages/detail_berita.html",
            "image": "images/Neta-Berita.jpg",
            "category": "Mobil Listrik",
            "categoryColor": "success",
            "date": "25 April 2024"
        },
        {
            "title": "ECGO Atasi Kendala Ojol Pakai Motor Listrik, Bisa Jalan 200 Km Sehari",
            "description": "Pengendara ojek online atau ojol saat ini sudah mulai menggunakan sepeda motor listrik. Cuma sebagian besar, memang masih mengandalkan motor bensin konc=vensional.",
            "link": "pages/detail_berita.html",
            "image": "images/ECGO-Berita.jpg",
            "category": "Mobil Listrik",
            "categoryColor": "primary",
            "date": "14 Januari 2024"
        },
        {
            "title": "Airlangga Hartarto Bocorkan Status Pabrik Baterai Mobil Listrik Hyundai di RI.",
            "description": "Menteri Koordinator Bidang Perekonomian, Airlangga Hartarto membocorkan status pabrik baterai Hyundai di Indonesia. Tempat pembuatan penyimpan energi untuk mobil listrik itu akan beroperasi dalam waktu dekat.",
            "link": "pages/detail_berita.html",
            "image": "images/Pabrik-Hyundai-Berita.jpg",
            "category": "Berita Umum",
            "categoryColor": "danger",
            "date": "2 Januari 2024"
        }
    ];

    // Container untuk menampilkan card-card berita
    const cardContainerBerita = document.getElementById('cardContainerBerita');

    // Menambahkan setiap card berita ke dalam DOM
    cardDataBerita.forEach(data => {
        // Membuat HTML untuk card berita
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

        // Menambahkan HTML card berita ke dalam container
        cardContainerBerita.innerHTML += cardHTML;
    });

    // Tombol "Lihat Semuanya" untuk bagian berita
    const lihatSemuaBerita = `
        <a href="pages/berita.html" class="lihat-semua">
        <h6 class="text-center">Lihat Semuanya</h6>
        </a>
    `;

    // Menambahkan tombol "Lihat Semuanya" ke dalam container berita
    cardContainerBerita.innerHTML += lihatSemuaBerita;


    // Data card untuk bagian review
    const cardDataReview = [
        {
            "title": "Tesla Model 3",
            "description": [
                "Jenis: SUV kompak",
                "Harga: Rp 990.000.000 (varian Performance)"
            ],
            "link": "/pages/detail_review.html",
            "image": "images/tesla-model-3-.jpg",
            "date": "10 Mei 2024"
        },
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

    // Container untuk menampilkan card-card review
    const cardContainerReview = document.getElementById('cardContainerReview');

    // Menambahkan setiap card review ke dalam DOM
    cardDataReview.forEach(data => {
        // Membuat HTML untuk deskripsi card review
        const descriptionHTML = data.description.map(desc => `<!-- Deskripsi card review -->`).join('');

        // Membuat HTML untuk card review
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

        // Menambahkan HTML card review ke dalam container
        cardContainerReview.innerHTML += cardHTML;
    });

    // Tombol "Lihat Semuanya" untuk bagian review
    const lihatSemuaReview = `
        <a href="pages/review.html" class="lihat-semua">
        <h6 class="text-center">Lihat Semuanya</h6>
        </a>
    `;

    // Menambahkan tombol "Lihat Semuanya" ke dalam container review
    cardContainerReview.innerHTML += lihatSemuaReview;
});
