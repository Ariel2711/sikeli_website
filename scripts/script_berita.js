document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll(".filters li");

    filters.forEach(filter => {
        filter.addEventListener("click", function () {
            // Remove the active class from all filters
            filters.forEach(item => {
                item.classList.remove("active");
            });

            // Add the active class to the clicked filter
            this.classList.add("active");
        });
    });
});