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

    const forumPosts = [
        {
            "author": "Sukirman",
            "date": "12 December 2024",
            "title": "Harga Motor Listrik",
            "content": "Motor Listrik sekarang masih mahal atau nggak dibanding dulu?",
            "category": {
                "text": "Motor Listrik",
                "color": "bg-success",
                "textColor": "text-success"
            },
            "views": "24 Views | 12 Reply"
        },
        {
            "author": "Suparjo",
            "date": "31 December 2024",
            "title": "Jenis Mobil yang bagus?",
            "content": "Kalau mobil yang bagus sekarang apa kalau listrik?",
            "category": {
                "text": "Mobil Listrik",
                "color": "bg-primary",
                "textColor": "text-primary"
            },
            "views": "25 Views | 4 Reply"
        },
        {
            "author": "Suparjo",
            "date": "15 November 2024",
            "title": "Di isi dirumah boros nggak?",
            "content": "Kalau mobil biasanya boros nggak buat listrik rumah?",
            "category": {
                "text": "Umum",
                "color": "bg-danger",
                "textColor": "text-danger"
            },
            "views": "54 Views | 20 Reply"
        }
    ];

    const forumPostsContainer = document.getElementById('forum-posts');

    forumPosts.forEach(post => {
        const postHTML = `
            <div class="container ${post.category.text} FAQ">
                <div class="forum-post">
                    <div class="post-header">
                        <div class="post-author">
                            <img src="../images/slider3.jpg" alt="Photo Profile">
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