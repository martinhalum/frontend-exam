// Get references to the button and modal
const openModalButton = document.getElementById("read-link");
const closeModalButton = document.getElementById("closeModalButton");
const modal = document.getElementById("review-modal");

// Function to open the modal
function openModal() {
  modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listeners
openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
