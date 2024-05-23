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