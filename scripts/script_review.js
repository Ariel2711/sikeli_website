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
});

document.addEventListener("DOMContentLoaded", function () {
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
});
