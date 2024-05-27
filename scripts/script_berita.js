document.addEventListener("DOMContentLoaded", function () {
    const cardData = [
        {
            "title": "Neta Buatan Bekasi Belum Lirik Pasar Ekspor",
            "description": "Pabrikan asal China, Neta, tak main-main terjun ke pasar Indonesia. Buktinya salah satu model yang dijual saat ini yaitu Neta V-II sudah diproduksi di Tanah Air.",
            "link": "detail_berita.html",
            "image": "../images/slider1.jpg",
            "category": {
                "text": "Mobil Listrik",
                "color": "bg-primary",
                "textColor": "text-primary"
            },
            "date": "25 April 2024"
        },
        {
            "title": "ECGO Atasi Kendala Ojol Pakai Motor Listrik, Bisa Jalan 200 Km Sehari",
            "description": "Pengendara ojek online atau ojol saat ini sudah mulai menggunakan sepeda motor listrik. Cuma sebagian besar, memang masih mengandalkan motor bensin konc=vensional.",
            "link": "detail_berita.html",
            "image": "../images/slider2.jpg",
            "category": {
                "text": "Motor Listrik",
                "color": "bg-success",
                "textColor": "text-success"
            },
            "date": "14 Januari 2024"
        },
        {
            "title": "Airlangga Hartarto Bocorkan Status Pabrik Baterai Mobil Listrik Hyundai di RI.",
            "description": "Menteri Koordinator Bidang Perekonomian, Airlangga Hartarto membocorkan status pabrik baterai Hyundai di Indonesia. Tempat pembuatan penyimpan energi untuk mobil listrik itu akan beroperasi dalam waktu dekat.",
            "link": "detail_berita.html",
            "image": "../images/slider3.jpg",
            "category": {
                "text": "Berita Umum",
                "color": "bg-danger",
                "textColor": "text-danger"
            },
            "date": "20 April 2024"
        }
    ];

    const cardContainerBig = document.getElementById('cardContainerBig');

    cardData.forEach(data => {
        const cardHTML = `
            <div class="col justify-content-center">
                <div class="card card-custom-height-big">
                    <img src="${data.image}" class="card-img-top img-custom-height-big" alt="...">
                    <div class="card-body">
                        <a href="${data.link}" class="title-berita">
                            <h5 class="card-title">${data.title}</h5>
                        </a>
                        <p class="card-text-desc">${data.description}</p>
                        <span class="d-flex align-items-center span-square-kategori">
                            <span class="square-kategori ${data.category.color} me-2"></span>
                            <h6 class="${data.category.textColor} text-kategori">${data.category.text}</h6>
                        </span>
                        <p class="card-text-date"><small class="text-muted">${data.date}</small></p>
                    </div>
                </div>
            </div>
        `;
        cardContainerBig.innerHTML += cardHTML;
    });

    const cardDataSmall = [
        {
            "title": "Neta Buatan Bekasi Belum Lirik Pasar Ekspor",
            "description": "Pabrikan asal China, Neta, tak main-main terjun ke pasar Indonesia. Buktinya salah satu model yang dijual saat ini yaitu Neta V-II sudah diproduksi di Tanah Air.",
            "link": "detail_berita.html",
            "image": "../images/slider1.jpg",
            "category": {
                "text": "Mobil Listrik",
                "color": "bg-primary",
                "textColor": "text-primary"
            },
            "date": "25 April 2024",
            "class": "Terpopuler Motor"
        },
        {
            "title": "ECGO Atasi Kendala Ojol Pakai Motor Listrik, Bisa Jalan 200 Km Sehari",
            "description": "Pengendara ojek online atau ojol saat ini sudah mulai menggunakan sepeda motor listrik. Cuma sebagian besar, memang masih mengandalkan motor bensin konc=vensional.",
            "link": "detail_berita.html",
            "image": "../images/slider2.jpg",
            "category": {
                "text": "Motor Listrik",
                "color": "bg-success",
                "textColor": "text-success"
            },
            "date": "14 Januari 2024",
            "class": "Terpopuler Motor"
        },
        {
            "title": "Airlangga Hartarto Bocorkan Status Pabrik Baterai Mobil Listrik Hyundai di RI.",
            "description": "Menteri Koordinator Bidang Perekonomian, Airlangga Hartarto membocorkan status pabrik baterai Hyundai di Indonesia. Tempat pembuatan penyimpan energi untuk mobil listrik itu akan beroperasi dalam waktu dekat.",
            "link": "detail_berita.html",
            "image": "../images/slider3.jpg",
            "category": {
                "text": "Berita Umum",
                "color": "bg-danger",
                "textColor": "text-danger"
            },
            "date": "20 April 2024",
            "class": "Terpopuler Berita-Umum"
        },
        {
            "title": "Yuanhang Auto resmi luncurkan mobil listrik H9.",
            "description": "Jenama otomotif yang fokus dalam pengembangan kendaraan elektrik, Yuanhang Auto resmi menghadirkan kendaraan jenis Sport Utility Vehicle (SUV) listrik murni H9 dengan tiga pilihan jarak jelajah 650 km, 840 km, dan 950 km.",
            "link": "detail_berita.html",
            "image": "../images/slider1.jpg",
            "category": {
                "text": "Mobil Listrik",
                "color": "bg-primary",
                "textColor": "text-primary"
            },
            "date": "15 April 2024",
            "class": "Terpopuler Mobil"
        },
        {
            "title": "Makin Banyak Merek Motor Listrik Bikin Pabrik di Indonesia, Aismoli Bilang Begini.",
            "description": "Ketua Umum Asosiasi Industri Motor Listrik Indonesia (Aismoli) Budi Setiyadi mengungkapkan sudah banyak merek motor listrik yang berinvestasi membangun pabrik di Tanah Air. Bahkan, menurut dia di bulan ini sudah ada tiga pabrikan yang menggelar groundbreaking pembangunan pabriknya.",
            "link": "detail_berita.html",
            "image": "/images/slider1.jpg",
            "category": {
                "text": "Motor Listrik",
                "color": "bg-success",
                "textColor": "text-success"
            },
            "date": "14 Februari 2024",
            "class": "Motor Terpopuler"
        },
        {
            "title": "Jaringan Terus Diperluas, Voltron Buka 6 SPKLU Lagi di PIK.",
            "description": "PT Exelly Elektrik Indonesia (Voltron), terus memperluas jaringan Stasiun Pengisian Kendaraan Listrik Umum (SPKLU) untuk mendukung ekosistem di Indonesia. Kali ini, operator penyedia pengisian baterai swasta tersebut, menambah enam mesin di area parkir kendaraan Batavia Pantai Indah Kapuk (PIK) selama 1x24 jam, dengan fasilitas yang nyaman.",
            "link": "detail_berita.html",
            "image": "../images/slider3.jpg",
            "category": {
                "text": "Berita Umum",
                "color": "bg-danger",
                "textColor": "text-danger"
            },
            "date": "20 Januari 2024",
            "class": "Berita-Umum"
        },
        {
            "title": "Bidik Pasar RI, Produsen Motor Listrik Sunra Hadirkan Produk Harga Ekonomis.",
            "description": "Produsen motor listrik PT Sunra Asia Pacific Hi-Tech atau Sunra Indonesia berupaya meningkatkan eksposur dan mempertegas posisinnya di Indonesia",
            "link": "detail_berita.html",
            "image": "/images/slider1.jpg",
            "category": {
                "text": "Motor Listrik",
                "color": "bg-success",
                "textColor": "text-success"
            },
            "date": "27 Desember 2023",
            "class": "Motor Terpopuler"
        },
        {
            "title": "Inkonsistensi Pemerintah Jadi Penyebab Turunnya Penjualan Mobil Listrik",
            "description": "Pemerintah sering mengubah kebijakan kendaraan listrik, yang hasilnya membuat sebagian besar masyarakat Indonesia menahan pembelian mobil listrik berbasis baterai, sehingga embuat laju pertumbuhan pasar otomotif nasional melambat.",
            "link": "detail_berita.html",
            "image": "/images/mobil1.jpg",
            "category": {
                "text": "Berita Umum",
                "color": "bg-danger",
                "textColor": "text-danger"
            },
            "date": "13 Januari 2024",
            "class": "Berita-Umum"

        },
        {
            "title": "Cara AHM Terapkan ESG.",
            "description": "Tak hanya menyiapkan produk sepeda motor listrik sebagai upaya netralitas karbon, PT Astra Honda Motor (AHM) bersama jaringannya juga mewujudkan komitmen dalam mendukung implementasi Environmental, Social, and Governance (ESG) yang baik.",
            "link": "detail_berita.html",
            "image": "/images/slider1.jpg",
            "category": {
                "text": "Motor Listrik",
                "color": "bg-success",
                "textColor": "text-success"
            },
            "date": "31 Desember 2023",
            "class": "Motor Terpopuler"
        },
        {
            "title": "Mobil Listrik Termurah Hyundai di Indonesia Mau Dijual Bulan Depan",
            "description": "Generasi pertama SUV kecil Kona pertama kali muncul di Korea Selatan pada 2017, mobil ini awalnya hanya ditawarkan dengan mesin bensin 2.000 cc dan 1.600 cc turbo. Versi Kona Electric muncul pada 2018.",
            "link": "detail_berita.html",
            "image": "/images/mobil2.jpg",
            "category": {
                "text": "Mobil Listrik",
                "color": "bg-primary",
                "textColor": "text-primary"
            },
            "date": "20 Maret 2024",
            "class": "Terpopuler Mobil"

        },
        {
            "title": "Perbandingan Harga Hyundai Kona Electric CBU dan Rakitan Lokal, Turun Ratusan Juta!",
            "description": "Hyundai Kona Electric rakitan lokal bakal menjadi mobil listrik termurah Hyundai yang dijual di Indonesia. Sejatinya Kona Electric pernah mewarnai jalanan Indonesia tapi statusnya diimpor dari Korea Selatan.",
            "link": "detail_berita.html",
            "image": "/images/slider1.jpg",
            "category": {
                "text": "Mobil Listrik",
                "color": "bg-primary",
                "textColor": "text-primary"
            },
            "date": "2 Februari 2024",
            "class": "Terpopuler Mobil"

        },
        {
            "title": "Kunker ke Korsel, Airlangga Bahas Pengembangan Mobil Listrik-Petrokimia RI",
            "description": "Menteri Koordinator Bidang Perekonomian Airlangga Hartarto melakukan kunjungan kerja ke Korea Selatan. Pihaknya membahas berbagai peluang investasi Korea Selatan di Indonesia, seperti pengembangan pabrik mobil Hyundai, pembangunan pabrik petrokimia oleh Lotte Chemical, dan komitmen pembangunan klaster industri baja berkapasitas 10 juta ton pada 2025.",
            "link": "detail_berita.html",
            "image": "/images/mobil1.jpg",
            "category": {
                "text": "Berita Umum",
                "color": "bg-danger",
                "textColor": "text-danger"
            },
            "date": "13 April 2024",
            "class": "Berita-Umum"

        }
    ];

    const cardContainerSmall = document.getElementById('cardContainerSmall');

    cardDataSmall.forEach(data => {
        const cardHTML = `
            <div class="card mb-3 mt-3 card-filter card-custom-height mx-auto ${data.class} card-mid">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${data.image}" class="img-fluid rounded-start img-custom-height" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <a href="${data.link}" class="title-berita">
                                <h5 class="card-title">${data.title}</h5>
                            </a>
                            <h6 class="card-text-desc">${data.description}</h6>
                            <span class="d-flex align-items-center span-square-kategori">
                                <span class="square-kategori ${data.category.color} me-2"></span>
                                <h6 class="${data.category.textColor} text-kategori">${data.category.text}</h6>
                            </span>
                            <p class="card-text-date"><small class="text-muted">${data.date}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        cardContainerSmall.innerHTML += cardHTML;
    });

    const commentsData = [
        {
            "authorName": "Sukirman",
            "authorImage": "../images/slider3.jpg",
            "commentContent": "Motor Listrik sekarang masih mahal atau nggak dibanding dulu?",
            "commentDate": "12 December 2024",
            "likes": 0,
            "dislikes": 0
        },
        {
            "authorName": "Sukirman",
            "authorImage": "../images/slider3.jpg",
            "commentContent": "Motor Listrik sekarang masih mahal atau nggak dibanding dulu?",
            "commentDate": "12 December 2024",
            "likes": 0,
            "dislikes": 0
        },
        {
            "authorName": "Sukirman",
            "authorImage": "../images/slider3.jpg",
            "commentContent": "Motor Listrik sekarang masih mahal atau nggak dibanding dulu?",
            "commentDate": "12 December 2024",
            "likes": 0,
            "dislikes": 0
        },
        {
            "authorName": "Sukirman",
            "authorImage": "../images/slider3.jpg",
            "commentContent": "Motor Listrik sekarang masih mahal atau nggak dibanding dulu?",
            "commentDate": "12 December 2024",
            "likes": 0,
            "dislikes": 0
        }
    ];

    const commentsSection = document.getElementById('comments');

    commentsData.forEach(data => {
        const commentHTML = `
            <div class="news-comment">
                <hr>
                <div class="comment-header">
                    <div class="comment-author">
                        <img src="${data.authorImage}" alt="Photo Profile">
                        <span class="author-name">${data.authorName}</span>
                    </div>
                </div>
                <div class="comment-content">
                    <p>${data.commentContent}</p>
                </div>
                <div class="comment-footer">
                    <div class="review-actions">
                        <span class="fa fa-thumbs-up"></span><span>${data.likes}</span>
                        <span class="fa fa-thumbs-down"></span><span>${data.dislikes}</span>
                    </div>
                    <span class="comment-date">${data.commentDate}</span>
                </div>
            </div>
        `;
        commentsSection.innerHTML += commentHTML;
    });

    const filters = document.querySelectorAll(".filters li");
    const cards = document.querySelectorAll(".card-filter");

    filters.forEach(filter => {
        filter.addEventListener("click", function () {
            filters.forEach(item => {
                item.classList.remove("active");
            });

            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            cards.forEach(card => {
                if (filterValue === "*" || card.classList.contains(filterValue)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll(".filters li");
    const cards = document.querySelectorAll(".card-filter");

    filters.forEach(filter => {
        filter.addEventListener("click", function () {
            filters.forEach(item => {
                item.classList.remove("active");
            });

            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            cards.forEach(card => {
                if (filterValue === "*" || card.classList.contains(filterValue)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    function filterCards(searchTerm) {
        const cardsBig = document.querySelectorAll(".card-custom-height-big");
        const cardsMid = document.querySelectorAll(".card-mid");

        cardsMid.forEach(function (card) {
            const cardTitle = card.querySelector(".card-title").textContent.toLowerCase();
            const cardDescription = card.querySelector(".card-text-desc").textContent.toLowerCase();
            if (cardTitle.includes(searchTerm) || cardDescription.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        if (searchTerm === "") {
            cardsBig.forEach(function (card) {
                card.style.display = "grid";
            });
        } else {
            cardsBig.forEach(function (card) {
                card.style.display = "none";
            });
        }
    }

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        filterCards(searchTerm);
    });

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.toLowerCase();
        filterCards(searchTerm);
    });
});
