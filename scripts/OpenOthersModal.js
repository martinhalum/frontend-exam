// Get references to the button and modal
const openOthersModalButton = document.getElementById("others-link");
const closeOthersModalButton = document.getElementById("close-others-button");
const othersModal = document.getElementById("others-modal");

// Function to open the modal
function openModal() {
  othersModal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
  othersModal.style.display = "none";
}

// Event listeners
openOthersModalButton.addEventListener("click", openModal);
closeOthersModalButton.addEventListener("click", closeModal);
