document.addEventListener("DOMContentLoaded", function () {
    const reviewsCard = [
        {
            imgSrc: "/images/tesla-model-3-.jpg",
            stars: 4,
            title: "Tesla Model 3",
            type: "Sedan kompak",
            power: "Listrik",
            range: "600 km (varian Performance)",
            battery: "82 kWh",
            chargingTime: "5 jam 45 menit (AC 11 kW) atau 25 menit (DC 250 kW)",
            features: "Autopilot, panoramic sunroof, heated seats, wireless charging, sound system premium, Apple CarPlay dan Android Auto",
            price: "Rp 990.000.000 (varian Performance)",
            numPrice: 990000000,
            link: "detail_review.html",
            category: "Mobil"
        },
        {
            imgSrc: "/images/hyundai-kona-electric-.jpg",
            stars: 3,
            title: "Hyundai Kona Electric",
            type: "SUV kompak",
            power: "Listrik",
            range: "345 km (varian Signature)",
            battery: "64,8 kWh",
            chargingTime: "7 jam 25 menit (AC 10 kW) atau 47 menit (DC 100 kW)",
            features: "Sunroof, panoramic sunroof, head-up display, wireless charging, sound system Krell, Apple CarPlay dan Android Auto",
            price: "Rp 675.000.000 (varian Signature)",
            numPrice: 675000000,
            link: "detail_review.html",
            category: "Mobil"
        },
        {
            imgSrc: "/images/Wuling-Air-EV.jpg",
            stars: 4,
            title: "Wuling Air EV",
            type: "Hatchback City Car",
            power: "Listrik",
            range: "200 km (varian Standard Range) atau 300 km (varian Long Range)",
            battery: "18 kWh (Standard Range) atau 27 kWh (Long Range)",
            chargingTime: "5-6 jam (AC rumahan) atau 40 menit (fast charging)",
            features: "AC, layar sentuh infotainment, electric windows, remote keyless entry, ABS & EBD",
            price: "Rp243.000.000 (varian Standard Range)",
            numPrice: 243000000,
            link: "detail_review.html",
            category: "Mobil"
        },
        {
            imgSrc: "/images/gesits.jpeg",
            stars: 3,
            title: "Gesits",
            type: "Skuter matic",
            power: "Listrik",
            range: "100 km (dengan 1 baterai)",
            battery: "5 kWh (bisa dipasang 2 baterai)",
            chargingTime: "8 jam",
            features: "Lampu LED, speedometer digital, keyless entry, alarm, socket charger",
            price: "Rp27.500.000",
            numPrice: 27500000,
            link: "detail_review.html",
            category: "Motor"
        },
        {
            imgSrc: "/images/alva-one.jpeg",
            stars: 4,
            title: "Alva One",
            type: "Skuter matic",
            power: "Listrik",
            range: "70 km (dengan 1 baterai)",
            battery: "2,7 kWh (bisa dipasang 2 baterai)",
            chargingTime: "4 jam",
            features: "Lampu LED, speedometer digital, keyless entry, alarm, USB port, socket charger",
            price: "Rp36.000.000",
            numPrice: 36000000,
            link: "detail_review.html",
            category: "Motor"
        },
        {
            imgSrc: "/images/selis.jpeg",
            stars: 5,
            title: "Selis E-Max",
            type: "Motor bebek",
            power: "Listrik",
            range: "60 km (dengan 1 baterai)",
            battery: "2,9 kWh (bisa dipasang 2 baterai)",
            chargingTime: "4 jam",
            features: "Lampu LED, speedometer digital, keyless entry, alarm, socket charger",
            price: "Rp21.500.000",
            numPrice: 21500000,
            link: "detail_review.html",
            category: "Motor"
        }
    ];

    const reviewContainer = document.getElementById('review-container');

    function displayReviews(reviews) {
        reviewContainer.innerHTML = '';
        reviews.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review', review.category);

            reviewDiv.innerHTML = `
                <img src="${review.imgSrc}" alt="Image of ${review.title}">
                <div class="star-group">
                    ${'<span class="fa fa-star checked"></span>'.repeat(review.stars)}
                    ${'<span class="fa fa-star"></span>'.repeat(5 - review.stars)}
                </div>
                <h2>${review.title}</h2>
                <div class="description">
                <p><strong>Harga:</strong> ${review.price}</p>
                    <p><strong>Jenis:</strong> ${review.type}</p>
                    <p><strong>Tenaga:</strong> ${review.power}</p>
                    <p><strong>Jarak tempuh:</strong> ${review.range}</p>
                    <p><strong>Kapasitas baterai:</strong> ${review.battery}</p>
                    <p><strong>Waktu pengisian daya:</strong> ${review.chargingTime}</p>
                    <p><strong>Fitur:</strong> ${review.features}</p>
                    <p><a href="${review.link}" class="read-more">Baca Selengkapnya</a></p>
                </div>
            `;
            reviewContainer.appendChild(reviewDiv);
        });
    }

    displayReviews(reviewsCard);

    const filters = document.querySelectorAll(".filters li");

    filters.forEach(filter => {
        filter.addEventListener("click", function () {
            filters.forEach(item => {
                item.classList.remove("active");
            });

            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            if (filterValue === "Terpopuler") {
                const sortedReviews = [...reviewsCard].sort((a, b) => b.stars - a.stars);
                displayReviews(sortedReviews);
            } else if (filterValue === "Termahal") {
                const sortedReviews = [...reviewsCard].sort((a, b) => b.numPrice - a.numPrice);
                displayReviews(sortedReviews);
            } else if (filterValue === "Termurah") {
                const sortedReviews = [...reviewsCard].sort((b, a) => b.numPrice - a.numPrice);
                displayReviews(sortedReviews);
            } else {
                const filteredReviews = filterValue === "*" ? reviewsCard : reviewsCard.filter(review => review.category === filterValue);
                displayReviews(filteredReviews);
            }
        });
    });

    const searchInput = document.querySelector(".search-bar input");
    const searchButton = document.querySelector(".search-bar button");

    function filterReviews(searchTerm) {
        const filteredReviews = reviewsCard.filter(review => {
            const title = review.title.toLowerCase();
            const description = `${review.type} ${review.power} ${review.range} ${review.battery} ${review.chargingTime} ${review.features} ${review.price}`.toLowerCase();
            return title.includes(searchTerm) || description.includes(searchTerm);
        });
        displayReviews(filteredReviews);
    }

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
        filterReviews(searchTerm);
    });

    searchButton.addEventListener("click", function (event) {
        event.preventDefault();
        const searchTerm = searchInput.value.trim().toLowerCase();
        filterReviews(searchTerm);
    });
});
