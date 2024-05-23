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
