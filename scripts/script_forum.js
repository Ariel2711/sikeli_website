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
});
