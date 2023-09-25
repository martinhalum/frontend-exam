const searchInput = document.getElementById("city-search");
const suggestionsList = document.getElementById("city-suggestions");

// Load your JSON data here (for simplicity, we'll use a static array)
const jsonData = [
  { zip: "10001", city: "New York" },
  { zip: "94102", city: "San Francisco" },
  // Add more data here...
];

// Function to filter suggestions based on user input
function filterSuggestions(input) {
  input = input.toLowerCase();
  return jsonData.filter((item) => {
    return item.zip.includes(input) || item.city.toLowerCase().includes(input);
  });
}

// Function to update suggestions list
function updateSuggestions() {
  const inputValue = searchInput.value;
  suggestionsList.innerHTML = "";

  if (inputValue.length === 0) {
    return;
  }

  const filteredData = filterSuggestions(inputValue);
  filteredData.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.city}, ${item.zip}`;
    suggestionsList.appendChild(listItem);

    // Add click event listener to populate input with the selected suggestion
    listItem.addEventListener("click", () => {
      searchInput.value = `${item.city}, ${item.zip}`;
      suggestionsList.innerHTML = "";
    });
  });
}

// Event listener for input changes
searchInput.addEventListener("input", updateSuggestions);
