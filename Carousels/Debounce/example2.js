const inputElement = document.getElementById('search-input');
const searchAPI = (query) => {
    console.log(`Searching API for: ${query}`);
    // Actual API call would go here
};

const debouncedSearch = debounce(searchAPI, 300);

inputElement.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});