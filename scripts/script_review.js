document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll(".filters li");
    const cards = document.querySelectorAll(".review");

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

    const searchInput = document.querySelector(".search-bar input");
    const searchButton = document.querySelector(".search-bar button");
    const reviews = document.querySelectorAll(".review");

    function filterReviews(searchTerm) {
        reviews.forEach(function (review) {
            const title = review.querySelector("h2").textContent.toLowerCase();
            const description = review.querySelector(".description").textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                review.style.display = "block";
            } else {
                review.style.display = "none";
            }
        });
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

    const reviewsCard = [
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
            link: "detail_review.html"
        },
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
            link: "detail_review.html"
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
            link: "detail_review.html"
        },
        {
            imgSrc: "/images/slider1.jpg",
            stars: 2,
            title: "Gesits",
            type: "Skuter matic",
            power: "Listrik",
            range: "100 km (dengan 1 baterai)",
            battery: "72V 20Ah (bisa dipasang 2 baterai)",
            chargingTime: "8 jam",
            features: "Lampu LED, speedometer digital, keyless entry, alarm, socket charger",
            price: "Rp27.500.000",
            link: "detail_review.html"
        },
        {
            imgSrc: "/images/slider1.jpg",
            stars: 4,
            title: "Alva One",
            type: "Skuter matic",
            power: "Listrik",
            range: "70 km (dengan 1 baterai)",
            battery: "60V 15Ah (bisa dipasang 2 baterai)",
            chargingTime: "4 jam",
            features: "Lampu LED, speedometer digital, keyless entry, alarm, USB port, socket charger",
            price: "Rp36.000.000",
            link: "detail_review.html"
        },
        {
            imgSrc: "/images/slider1.jpg",
            stars: 5,
            title: "Selis E-Max",
            type: "Motor bebek",
            power: "Listrik",
            range: "60 km (dengan 1 baterai)",
            battery: "60V 12Ah (bisa dipasang 2 baterai)",
            chargingTime: "4 jam",
            features: "Lampu LED, speedometer digital, keyless entry, alarm, socket charger",
            price: "Rp21.500.000",
            link: "detail_review.html"
        }
    ];

    const reviewContainer = document.getElementById('review-container');

    reviewsCard.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        if (review.type === "SUV kompak" || review.type === "Sedan kompak" || review.type === "Hatchback City Car") {
            reviewDiv.classList.add('Mobil');
        } else {
            reviewDiv.classList.add('Motor');
        }

        reviewDiv.innerHTML = `
            <img src="${review.imgSrc}" alt="Image of ${review.title}">
            <div class="star-group">
                ${'<span class="fa fa-star checked"></span>'.repeat(review.stars)}
                ${'<span class="fa fa-star"></span>'.repeat(5 - review.stars)}
            </div>
            <h2>${review.title}</h2>
            <div class="description">
                <p><strong>Jenis:</strong> ${review.type}</p>
                <p><strong>Tenaga:</strong> ${review.power}</p>
                <p><strong>Jarak tempuh:</strong> ${review.range}</p>
                <p><strong>Kapasitas baterai:</strong> ${review.battery}</p>
                <p><strong>Waktu pengisian daya:</strong> ${review.chargingTime}</p>
                <p><strong>Fitur:</strong> ${review.features}</p>
                <p><strong>Harga:</strong> ${review.price}</p>
                <p><a href="${review.link}" class="read-more">Baca Selengkapnya</a></p>
            </div>
        `;
        reviewContainer.appendChild(reviewDiv);
    });
});