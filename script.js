// Hent modal-elementer og bildeelementer
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close-btn");

// Hent alle bilder i galleriet
const images = document.querySelectorAll(".gallery img");

// Legg til event listener for å åpne modal når bilde klikkes
images.forEach(img => {
  img.addEventListener("click", (e) => {
    modal.style.display = "flex";  // Vis modal
    modalImg.src = e.target.src;  // Sett src til bildet som ble klikket
  });
});

// Lukk modal når du klikker på "X"-knappen
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Lukk modal hvis du klikker utenfor bildet
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});