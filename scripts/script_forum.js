document.addEventListener("DOMContentLoaded", function () {
    const forumPosts = [
        {
            "author": "Sukirman",
            "date": "12 December 2023",
            "title": "Harga Motor Listrik",
            "content": "Motor Listrik sekarang masih mahal atau nggak dibanding dulu?",
            "category": {
                "text": "Motor Listrik",
                "color": "bg-success",
                "textColor": "text-success"
            },
            "views": "24 Views | 12 Reply",
            "image": "/images/Mustache-man.png",
            "categoryFilter": "Motor FAQ"
        },
        {
            "author": "Suparjo",
            "date": "31 December 2023",
            "title": "Jenis Mobil yang bagus?",
            "content": "Kalau mobil yang bagus sekarang apa kalau listrik?",
            "category": {
                "text": "Mobil Listrik",
                "color": "bg-primary",
                "textColor": "text-primary"
            },
            "views": "25 Views | 4 Reply",
            "image": "/images/Masculine-man.png",
            "categoryFilter": "Mobil FAQ"
        },
        {
            "author": "Suparjo",
            "date": "15 November 2023",
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
            "date": "11 Maret 2024",
            "title": "Batere iso njeblug po?",
            "content": "Kula niku tau krungu, nek nganggo montor listrik niku iso kobongan montore. Tenanan po kae?",
            "category": {
                "text": "Umum",
                "color": "bg-danger",
                "textColor": "text-danger"
            },
            "views": "25 Views | 4 Reply",
            "image": "/images/Old-woman.png",
            "categoryFilter": "Umum FAQ"
        },
        {
            "author": "Anne",
            "date": "29 Agustus 2023",
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
            "date": "28 December 2023",
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
            "date": "5 September 2023",
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
            "date": "17 Agustus 2023",
            "title": "Ada mobil listrik anti peluru?",
            "content": "Bos saya suruh saya cariin mobil yang aman anti peluru gitu. Tapi dianya mau yang ramah lingkungan, mobil listrik ada yang memenuhi kriteria gitu nggak? Infokan rek",
            "category": {
                "text": "Mobil Listrik",
                "color": "bg-primary",
                "textColor": "text-primary"
            },
            "views": "190 Views | 45 Reply",
            "image": "/images/HoodieOld-man.png",
            "categoryFilter": "Mobil FAQ"
        },
        {
            "author": "Anne",
            "date": "30 Maret 2024",
            "title": "Listrik rumah minimal berapa?",
            "content": "I mau beli mobil dan motor listrik. Kira-kira listrik rumah I harus berapa VA?",
            "category": {
                "text": "Umum",
                "color": "bg-danger",
                "textColor": "text-danger"
            },
            "views": "48 Views | 7 Reply",
            "image": "/images/Blonde-girl.png",
            "categoryFilter": "Umum FAQ"
        }
    ];

    const forumPostsContainer = document.getElementById('forum-posts');

    forumPosts.forEach(post => {
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

    const commentsData = [
        {
            "authorName": "Herman",
            "authorImage": "../images/tesla-model-3-.jpg",
            "replyContent": "Menurut saya, masih cukup mahal, tapi sebanding dengan teknologi yang ditawarkan.",
            "replyDate": "13 December 2024",
            "likes": 10,
            "dislikes": 0
        },
        {
            "authorName": "Siti",
            "authorImage": "../images/hyundai-kona-electric-.jpg",
            "replyContent": "<span class='text-primary'>@Herman</span> Sekarang ada banyak pilihan yang lebih terjangkau dibanding beberapa tahun yang lalu.",
            "replyDate": "14 December 2024",
            "likes": 20,
            "dislikes": 5
        }
    ];

    const commentsSection = document.getElementById('comments');

    commentsData.forEach(comment => {
        const commentHTML = `
            <div class="reply">
            <div class="post-header">
                <div class="post-author">
                    <img src="${comment.authorImage}" alt="Photo Profile">
                    <span>${comment.author}</span>
                </div>
                <span class="post-date">${comment.commentDate}</span>
            </div>
            <div class="post-content">
                <p>${comment.commentContent}</p>
            </div>
            <div class="review-actions">
            <span class="fa fa-thumbs-up"></span><span>${comment.likes}</span>
            <span class="fa fa-thumbs-down"></span><span>${comment.dislikes}</span>
            </div>
            </div>
        `;
        commentsSection.innerHTML += commentHTML;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll(".filters li");
    const cards = document.querySelectorAll(".container");

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
    const reviews = document.querySelectorAll(".container");

    function filterReviews(searchTerm) {
        reviews.forEach(function (review) {
            const title = review.querySelector("h2").textContent.toLowerCase();
            const description = review.querySelector("p").textContent.toLowerCase();

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
});