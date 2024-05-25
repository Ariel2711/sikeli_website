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

    const cardData = [
        {
            "title": "Nyaman dan Irit Menjelajahi Trans Jawa Bersama All New Honda CR-V RS e:HEV",
            "description": "All New CR-V RS e:HEV menjadi pilihan karena selain ingin mengeksplorasi potensi mesin hybrid untuk menjelajah Trans Jawa, rangkaian fitur yang dimilikinya juga bisa membuat perjalanan lebih nyaman dan aman. Terutama lewat kehadiran teknologi Honda Sensing yang lengkap, menyediakan ragam fitur keselamatan aktif.",
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
            "title": "Road Trip Jakarta - Surabaya Bersama All New Toyota Yaris Cross S HV",
            "description": "Toyota menjadi pabrikan yang aktif menawarkan produk hybrid. Cukup banyak model yang masuk lini keluarga hybrid ditawarkan di Indonesia. Salah satu yang terbaru adalah Yaris Cross. Varian atas dengan menawarkan opsi dengan imbuhan Toyota Hybrid System. Menjadi model yang pas sebagai tes perjalanan jarak jauh sekaligus meninjau jalur mudik. Kami pun memutuskan membawa All New Yaris Cross HEV dari Jakarta menuju Surabaya dalam Electria: Mudik with Hybrid.",
            "link": "detail_berita.html",
            "image": "../images/slider2.jpg",
            "category": {
                "text": "Motor Listrik",
                "color": "bg-success",
                "textColor": "text-success"
            },
            "date": "20 April 2024"
        },
        {
            "title": "Mudik Asyik Bareng Suzuki Ertiga Cruise Hybrid Menuju Kota Yogyakarta",
            "description": "Guna menjaga kenyamanan dan efisiensi berkendara ketika melancong jauh, All New Ertiga Hybrid Cruise dimotori oleh mesin berkode K15B. Kemudian dilengkapi teknologi Smart Hybrid Vehicle by Suzuki (SHVS). Kapasitas baterai pun meningkat. Dari 6 Ah menjadi 10 Ah agar memberikan kinerja semakin optimal sebagai mobil rendah emisi dan irit bahan bakar. Bagian ini yang membuat kian mantap buat diajak berkelana dari Jakarta menuju Yogyakarta dengan jarak sejauh lebih kurang 600 km. Selain pengujian, perjalanan ini menjadi simulasi mudik Lebaran 2024.",
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
            "title": "Nyaman dan Irit Menjelajahi Trans Jawa Bersama All New Honda CR-V RS e:HEV",
            "description": "All New CR-V RS e:HEV menjadi pilihan karena selain ingin mengeksplorasi potensi mesin hybrid untuk menjelajah Trans Jawa, rangkaian fitur yang dimilikinya juga bisa membuat perjalanan lebih nyaman dan aman. Terutama lewat kehadiran teknologi Honda Sensing yang lengkap, menyediakan ragam fitur keselamatan aktif.",
            "link": "detail_berita.html",
            "image": "/images/slider1.jpg",
            "category": {
                "text": "Mobil Listrik",
                "color": "bg-primary",
                "textColor": "text-primary"
            },
            "date": "25 April 2024",
            "class": "Terpopuler Mobil"
        },
        {
            "title": "Road Trip Jakarta - Surabaya Bersama All New Toyota Yaris Cross S HV",
            "description": "Toyota menjadi pabrikan yang aktif menawarkan produk hybrid. Cukup banyak model yang masuk lini keluarga hybrid ditawarkan di Indonesia. Salah satu yang terbaru adalah Yaris Cross. Varian atas dengan menawarkan opsi dengan imbuhan Toyota Hybrid System. Menjadi model yang pas sebagai tes perjalanan jarak jauh sekaligus meninjau jalur mudik. Kami pun memutuskan membawa All New Yaris Cross HEV dari Jakarta menuju Surabaya dalam Electria: Mudik with Hybrid.",
            "link": "detail_berita.html",
            "image": "/images/slider1.jpg",
            "category": {
                "text": "Motor Listrik",
                "color": "bg-success",
                "textColor": "text-success"
            },
            "date": "20 April 2024",
            "class": "Motor Terpopuler"
        },
        {
            "title": "Mudik Asyik Bareng Suzuki Ertiga Cruise Hybrid Menuju Kota Yogyakarta",
            "description": "Guna menjaga kenyamanan dan efisiensi berkendara ketika melancong jauh, All New Ertiga Hybrid Cruise dimotori oleh mesin berkode K15B. Kemudian dilengkapi teknologi Smart Hybrid Vehicle by Suzuki (SHVS). Kapasitas baterai pun meningkat. Dari 6 Ah menjadi 10 Ah agar memberikan kinerja semakin optimal sebagai mobil rendah emisi dan irit bahan bakar. Bagian ini yang membuat kian mantap buat diajak berkelana dari Jakarta menuju Yogyakarta dengan jarak sejauh lebih kurang 600 km. Selain pengujian, perjalanan ini menjadi simulasi mudik Lebaran 2024.",
            "link": "detail_berita.html",
            "image": "/images/slider1.jpg",
            "category": {
                "text": "Berita Umum",
                "color": "bg-danger",
                "textColor": "text-danger"
            },
            "date": "20 April 2024",
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
});
