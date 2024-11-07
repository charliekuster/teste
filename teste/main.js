// Sample data fetching function (replace this with actual API/database call)
async function fetchFilterOptions(filterId) {
    const sampleData = {
        species: ["Species 1", "Species 2", "Species 3"],
        sequence: ["Type A", "Type B", "Type C"],
        "k-locus": ["Locus 1", "Locus 2", "Locus 3"],
        "sample-type": ["Clinical", "Environmental"],
        "resistance-gene": ["Gene 1", "Gene 2", "Gene 3"],
        date: ["2021", "2022", "2023"],
        country: ["Country 1", "Country 2", "Country 3"]
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
        { id: "k-locus", elementId: "k-locus-options" },
        { id: "sample-type", elementId: "sample-type-options" },
        { id: "resistance-gene", elementId: "resistance-gene-options" },
        { id: "date", elementId: "date-options" },
        { id: "country", elementId: "country-options" }
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
    }
}

// Initialize filters on page load
document.addEventListener("DOMContentLoaded", loadFilters);
