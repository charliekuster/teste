// Sample data fetching function (replace this with actual API/database call)
async function fetchFilterOptions(filterId) {
    const sampleData = {
        species: ["Species 1", "Species 2", "Species 3"],
        sequence: ["Type A", "Type B", "Type C"]

    };
    return sampleData[filterId];
}

// Toggle dropdown visibility
function toggleDropdown(event) {
    const options = event.target.nextElementSibling;
    options.style.display = options.style.display === "none" ? "block" : "none";
}



// Load filter options and set up click events
async function loadFilters() {
    const filters = [
        { id: "species", elementId: "species-options" },
        { id: "sequence", elementId: "sequence-options" },
        { }
    ];

    for (const filter of filters) {
        const options = await fetchFilterOptions(filter.id);
        const optionsContainer = document.getElementById(filter.elementId);
        
        options.forEach(option => {
            const optionElement = document.createElement("p");
            optionElement.textContent = option;
            optionsContainer.appendChild(optionElement);
        });

        document.getElementById(`${filter.id}-filter`).querySelector(".filter-title")
            .addEventListener("click", toggleDropdown);

        document.querySelector(".seta")
            .addEventListener("click", toggleDropdown);
    }
}

// Initialize filters on page load
document.addEventListener("DOMContentLoaded", loadFilters);
