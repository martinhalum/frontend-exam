const servicesData = {
  services: [
    "Family",
    "Criminal Defense",
    "Business",
    "Personal Injury",
    "Bankruptcy & Finances",
    "Products & Services",
    "Employment",
    "Real Estate",
    "Immigration",
    "Wills, Trusts & Estates",
    "Government",
    "Intellectual Property",
  ],
};
const openCategoryModalButton = document.getElementById("category-link");
const closeCategoryModalButton = document.getElementById("category-close");
const categoryModal = document.getElementById("step-three-modal");

// Function to open the modal
function openModal() {
  categoryModal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
  categoryModal.style.display = "none";
}

closeCategoryModalButton.addEventListener("click", closeModal);

// Function to fetch JSON data and populate the dropdown
async function populateDropdown() {
  const services = servicesData.services;

  const dropdownBtn = document.getElementById("dropdownBtn");
  const findBtn = document.getElementById("find-lawyer");
  const dropdownOptions = document.getElementById("dropdownOptions");

  // Populate the dropdown options
  services.forEach((service) => {
    const option = document.createElement("li");
    option.setAttribute("id", "category-link");
    option.textContent = service;
    option.addEventListener("click", () => {
      dropdownBtn.textContent = service;
      openModal();
      dropdownOptions.style.display = "none";
    });
    dropdownOptions.appendChild(option);
  });

  // Show/hide dropdown options on button click
  dropdownBtn.addEventListener("click", () => {
    if (dropdownOptions.style.display === "block") {
      dropdownOptions.style.display = "none";
    } else {
      dropdownOptions.style.display = "block";
    }
  });

  findBtn.addEventListener("click", closeModal);
}
