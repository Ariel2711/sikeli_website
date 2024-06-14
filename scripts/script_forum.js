// Event listener untuk memastikan konten DOM telah dimuat sebelum dieksekusi
document.addEventListener("DOMContentLoaded", function () {
    const forumPosts = [
        {
            "author": "Sukirman",
            "date": "25 April 2024",
            "title": "Harga Motor Listrik",
            "content": "Motor Listrik sekarang masih mahal atau nggak dibanding dulu?",
            "category": {
                "text": "Motor Listrik",
                "color": "bg-success",
                "textColor": "text-success"
            },
            "views": "35 Views | 8 Reply",
            "image": "/images/Mustache-man.png",
            "categoryFilter": "Motor"
        },
        {
            "author": "Suparjo",
            "date": "11 April 2024",
            "title": "Jenis Mobil yang bagus?",
            "content": "Kalau mobil yang bagus sekarang apa kalau listrik?",
            "category": {
                "text": "Mobil Listrik",
                "color": "bg-primary",
                "textColor": "text-primary"
            },
            "views": "25 Views | 4 Reply",
            "image": "/images/Masculine-man.png",
            "categoryFilter": "Mobil"
        },
        {
            "author": "Suparjo",
            "date": "19 Maret 2024",
            "title": "Di isi dirumah boros nggak?",
            "content": "Kalau mobil biasanya boros nggak buat listrik rumah?",
            "category": {
                "text": "Umum",
                "color": "bg-danger",
                "textColor": "text-danger"
            },
            "views": "54 Views | 20 Reply",
            "image": "/images/Masculine-man.png",
            "categoryFilter": "Umum"
        },
        {
            "author": "Herman",
            "date": "15 Februari 2024",
            "title": "Mobil listrik perlu servis rutin nggak?",
            "content": "Setau saya kalau mobil bbm itu perlu di servis rutin setiap beberapa bulan sekali. Kalau mobil listrik perlu di servis rutin juga?",
            "category": {
                "text": "Mobil Listrik",
                "color": "bg-primary",
                "textColor": "text-primary"
            },
            "views": "37 Views | 8 Reply",
            "image": "/images/Bald-man.png",
            "categoryFilter": "Mobil"
        },
        {
            "author": "Maimunah",
            "date": "2 Februari 2024",
            "title": "Batere iso njeblug po?",
            "content": "Kula niku tau krungu, nek nganggo montor listrik niku iso kobongan montore. Tenanan po kae?",
            "category": {
                "text": "Umum",
                "color": "bg-danger",
                "textColor": "text-danger"
            },
            "views": "71 Views | 19 Reply",
            "image": "/images/Old-woman.png",
            "categoryFilter": "Umum"
        },
        {
            "author": "Anne",
            "date": "29 Desember 2023",
            "title": "Apakah mobil listrik berisik?",
            "content": "Suara yang dikeluarkan mobil listrik berisik kah? Kalau dibandingkan sama mobil diesel gimana?",
            "category": {
                "text": "Mobil Listrik",
                "color": "bg-primary",
                "textColor": "text-primary"
            },
            "views": "81 Views | 17 Reply",
            "image": "/images/Blonde-girl.png",
            "categoryFilter": "Mobil"
        },
        {
            "author": "Bayu",
            "date": "28 Desember 2023",
            "title": "Berapa jarak motor listrik?",
            "content": "Saya rencana mau beli motor listrik. Biasanya dipake berapa km baru habis baterainya?",
            "category": {
                "text": "Motor Listrik",
                "color": "bg-success",
                "textColor": "text-success"
            },
            "views": "25 Views | 4 Reply",
            "image": "/images/Old-man.png",
            "categoryFilter": "Motor"
        },
        {
            "author": "Djawir",
            "date": "5 November 2023",
            "title": "Motor listrik tahan banjir nggak?",
            "content": "Kalau saya pakai terobos banjir, nanti bisa mati di tengah jalan nggak? Atau malah mati total?",
            "category": {
                "text": "Motor Listrik",
                "color": "bg-success",
                "textColor": "text-success"
            },
            "views": "69 Views | 13 Reply",
            "image": "/images/HoodieOld-man.png",
            "categoryFilter": "Motor"
        },
        {
            "author": "Djawir",
            "date": "31 Oktober 2023",
            "title": "Ada mobil listrik anti peluru?",
            "content": "Bos saya suruh saya cariin mobil yang aman anti peluru gitu. Tapi dianya mau yang ramah lingkungan, mobil listrik ada yang memenuhi kriteria gitu nggak? Infokan rek",
            "category": {
                "text": "Mobil Listrik",
                "color": "bg-primary",
                "textColor": "text-primary"
            },
            "views": "190 Views | 45 Reply",
            "image": "/images/HoodieOld-man.png",
            "categoryFilter": "Mobil"
        },
        {
            "author": "Anne",
            "date": "17 Agustus 2023",
            "title": "Listrik rumah minimal berapa?",
            "content": "I mau beli mobil dan motor listrik. Kira-kira listrik rumah I harus berapa VA?",
            "category": {
                "text": "Umum",
                "color": "bg-danger",
                "textColor": "text-danger"
            },
            "views": "48 Views | 7 Reply",
            "image": "/images/Blonde-girl.png",
            "categoryFilter": "Umum"
        }
    ];

    const forumPostsContainer = document.getElementById('forum-posts');

    // Fungsi untuk menampilkan postingan forum
    function displayForumPosts(posts) {
        forumPostsContainer.innerHTML = '';
        posts.forEach(post => {
            const postHTML = `
                <div class="container ${post.categoryFilter}">
                    <div class="forum-post">
                        <div class="post-header">
                            <div class="post-author">
                                <img src="${post.image}" alt="Photo Profile">
                                <span>${post.author}</span>
                            </div>
                            <span class="post-date">${post.date}</span>
                        </div>
                        <div class="post-content">
                            <h2><a href="detail_forum.html">${post.title}</a></h2>
                            <p>${post.content}</p>
                        </div>
                        <div class="post-footer">
                            <span class="d-flex align-items-center span-square-kategori">
                                <span class="square-kategori ${post.category.color} me-2"></span>
                                <h6 class="${post.category.textColor} text-kategori">${post.category.text}</h6>
                            </span>
                            <span class="post-views">${post.views}</span>
                        </div>
                    </div>
                </div>
            `;
            forumPostsContainer.innerHTML += postHTML;
        });
    }

    // Menampilkan semua postingan forum saat DOM dimuat
    displayForumPosts(forumPosts);

    // Mendapatkan semua elemen filter dan kontainer postingan forum
    const filters = document.querySelectorAll(".filters li");
    const cards = document.querySelectorAll(".container");

    // Fungsi untuk mengubah string tampilan menjadi bilangan bulat
    function parseViews(viewString) {
        const match = viewString.match(/(\d+) Views/);
        return match ? parseInt(match[1]) : 0;
    }

    // Menambahkan event listener untuk setiap filter
    filters.forEach(filter => {
        filter.addEventListener("click", function () {
            // Menghapus kelas "active" dari semua filter
            filters.forEach(item => {
                item.classList.remove("active");
            });

            // Menambahkan kelas "active" pada filter yang diklik
            this.classList.add("active");

            // Mendapatkan nilai filter yang diklik
            const filterValue = this.getAttribute("data-filter");

            // Menerapkan filter pada postingan forum
            let filteredPosts = forumPosts.filter(post => {
                return filterValue === "*" || post.categoryFilter === filterValue;
            });

            // Menampilkan postingan forum yang sudah difilter
            displayForumPosts(filteredPosts);

            // Jika filter "FAQ" dipilih, maka urutkan postingan berdasarkan jumlah views
            if (filterValue === "FAQ") {
                let filteredPosts = forumPosts.filter(post => {
                    return true;
                });
                // Urutkan postingan berdasarkan jumlah views dari yang tertinggi ke terendah
                filteredPosts.sort((a, b) => parseViews(b.views) - parseViews(a.views));
                // Menampilkan postingan forum yang sudah diurutkan
                displayForumPosts(filteredPosts);
            }
        });
    });

    // Mendapatkan elemen input pencarian dan tombol pencarian
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const reviews = document.querySelectorAll(".container");

    // Fungsi untuk melakukan filter pada postingan forum berdasarkan pencarian
    function filterReviews(searchTerm) {
        reviews.forEach(function (review) {
            const title = review.querySelector("h2").textContent.toLowerCase();
            const description = review.querySelector("p").textContent.toLowerCase();

            // Menampilkan atau menyembunyikan postingan forum berdasarkan apakah judul atau deskripsinya cocok dengan kata kunci pencarian
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                review.style.display = "block";
            } else {
                review.style.display = "none";
            }
        });
    }

    // Event listener untuk memfilter postingan forum saat input pencarian berubah
    searchInput.addEventListener("input", function () {
        // Mendapatkan kata kunci pencarian
        const searchTerm = searchInput.value.trim().toLowerCase();
        // Melakukan filter pada postingan forum berdasarkan kata kunci pencarian
        filterReviews(searchTerm);
    });

    // Event listener untuk memfilter postingan forum saat tombol pencarian diklik
    searchButton.addEventListener("click", function (event) {
        event.preventDefault();
        // Mendapatkan kata kunci pencarian
        const searchTerm = searchInput.value.trim().toLowerCase();
        // Melakukan filter pada postingan forum berdasarkan kata kunci pencarian
        filterReviews(searchTerm);
    });
});