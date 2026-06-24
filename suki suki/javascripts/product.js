window.addEventListener("load", () => {
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closeBtn");

  // Show popup when page loads
  popup.style.display = "block";

  // Close popup when clicking the X
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Close popup when clicking outside the box
  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});

