// Show today's date
function showDate() {
  const today = new Date();
  document.getElementById("date").innerHTML =
    "Today's Date: " + today.toDateString();
}

// Run when the page loads
window.addEventListener("load", () => {
  showDate();
  alert("Welcome to Suki Suki Naturals!");
});

// Simple form validation
function validateForm(event) {
  // Prevent page reload
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields before submitting.");
    return false;
  }

  // Basic email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}
// Show today's date
function showDate() {
  const today = new Date();
  document.getElementById("date").innerHTML =
    "Today's Date: " + today.toDateString();
}

// Run when the page loads
window.addEventListener("load", () => {
  showDate();
  alert("Welcome to Suki Suki Naturals!");
});

// Simple form validation
function validateForm(event) {
  // Prevent page reload
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields before submitting.");
    return false;
  }

  // Basic email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}

// Show today's date
function showDate() {
  const today = new Date();
  document.getElementById("date").innerHTML =
    "Today's Date: " + today.toDateString();
}

// Run when the page loads
window.addEventListener("load", () => {
  showDate();
  alert("Welcome to Suki Suki Naturals!");
});

// Simple form validation
function validateForm(event) {
  // Prevent page reload
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields before submitting.");
    return false;
  }

  // Basic email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}
