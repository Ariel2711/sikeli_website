// Event listener untuk memastikan konten DOM telah dimuat sebelum dieksekusi
document.addEventListener("DOMContentLoaded", function () {
    // Data card yang akan ditampilkan
    const cardData = [
        {
            "title": "SPLU Klojen",
            "address": "Jl. Jenderal Basuki Rahmat, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65111",
            "link": "https://maps.app.goo.gl/A4WtX8tiDF4i7Agh9",
            "image": "../images/location5.jpg",
            "type": "SPLU"
        },
        {
            "title": "SPLU Batu",
            "address": "Jl. Diponegoro No.1, Sisir, Kec. Batu, Kota Batu Jawa Timur, Sisir, Kec. Batu, Kota Batu, Jawa Timur 65314",
            "link": "https://maps.app.goo.gl/6bvXqpBgGPAgayYx5",
            "image": "../images/location2.jpg",
            "type": "SPLU"
        },
        {
            "title": "SPLU Ketabang",
            "address": "Jl. Pemuda No.209, Ketabang, Kec. Genteng, Surabaya, Jawa Timur 60271",
            "link": "https://maps.app.goo.gl/QxYEDyxMzoCV8eut5",
            "image": "../images/location1.jpg",
            "type": "SPLU"
        },
        {
            "title": "SPKLU Klojen",
            "address": "Jl. Jenderal Basuki Rahmat, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65111",
            "link": "https://maps.app.goo.gl/A4WtX8tiDF4i7Agh9",
            "image": "../images/location3.jpg",
            "type": "SPKLU"
        },
        {
            "title": "SPKLU Araya",
            "address": "Jl.Araya Boulevard No.27, Ulesari, Tirtomoyo, Pakis, Malang Regency, Jawa Timur 65154",
            "link": "https://maps.app.goo.gl/BrsCrcFqVxvehHzE8",
            "image": "../images/location4.jpg",
            "type": "SPKLU"
        },
        {
            "title": "SPKLU Ijen",
            "address": "Jl. Ijen Nirwana Raya No.16 Blok A, Bareng, Kec. Klojen, Kota Malang, Jawa Timur 65116",
            "link": "https://maps.app.goo.gl/CRAp85stA69Gqz9i8",
            "image": "../images/location6.jpg",
            "type": "SPKLU"
        }
    ];

    // Container untuk menempatkan card-card
    const cardContainer = document.getElementById('cardContainer');

    // Menambahkan setiap card ke dalam DOM
    cardData.forEach(data => {
        // Membuat HTML untuk card
        const cardHTML = `
             <div class="card mb-3 mt-3 mx-auto card-custom-height ${data.type}">
                 <div class="row g-0">
                     <div class="col-md-4">
                         <img src="${data.image}" class="img-fluid rounded-start img-custom-height" alt="...">
                     </div>
                     <div class="col-md-8">
                         <div class="card-body">
                             <a href="../pages/detail_lokasi.html">
                                 <h5 class="card-title">${data.title}</h5>
                             </a>
                             <p class="card-text-desc">${data.address}</p>
                             <a href="${data.link}" target="blank">open<span class="fluent--open-16-regular"></span></a>
                         </div>
                     </div>
                 </div>
             </div>
         `;
        // Menambahkan HTML card ke dalam container
        cardContainer.innerHTML += cardHTML;
    });

    // Memilih semua filter
    const filters = document.querySelectorAll(".filters li");
    // Memilih semua card
    const cards = document.querySelectorAll(".card");

    // Menambahkan event listener untuk setiap filter
    filters.forEach(filter => {
        filter.addEventListener("click", function () {
            // Menghapus kelas 'active' dari semua filter
            filters.forEach(item => {
                item.classList.remove("active");
            });
            // Menambahkan kelas 'active' ke filter yang diklik
            this.classList.add("active");

            // Mendapatkan nilai filter yang dipilih
            const filterValue = this.getAttribute("data-filter");

            // Menampilkan atau menyembunyikan card berdasarkan filter
            cards.forEach(card => {
                if (filterValue === "*" || card.classList.contains(filterValue)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Memilih elemen input pencarian
    const searchInput = document.getElementById("searchInput");
    // Memilih tombol pencarian
    const searchButton = document.getElementById("searchButton");

    // Fungsi untuk menyaring card berdasarkan kata kunci pencarian
    function filterCards(searchTerm) {
        cards.forEach(function (card) {
            const cardTitle = card.querySelector(".card-title").textContent.toLowerCase();
            const cardDescription = card.querySelector(".card-text-desc").textContent.toLowerCase();
            if (cardTitle.includes(searchTerm) || cardDescription.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Menambahkan event listener untuk input pencarian
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        filterCards(searchTerm);
    });

    // Menambahkan event listener untuk tombol pencarian
    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.toLowerCase();
        filterCards(searchTerm);
    });
});