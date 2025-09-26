// Update welcome message dynamically
document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const usernameSpan = document.getElementById("username");

  nameInput.addEventListener("input", () => {
    usernameSpan.textContent = nameInput.value || "Guest";
  });

  // Form Validation
  const form = document.getElementById("contactForm");
  const result = document.getElementById("formResult");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("messageBox").value.trim();

    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields!");
      return;
    }

    if (!/^[0-9]+$/.test(phone)) {
      alert("Phone number must be numeric!");
      return;
    }

    result.innerHTML = `
      <strong>Name:</strong> ${name} <br>
      <strong>Email:</strong> ${email} <br>
      <strong>Phone:</strong> ${phone} <br>
      <strong>Message:</strong> ${message}
    `;
    form.reset();
    usernameSpan.textContent = "Guest";
  });
});
// Update welcome message dynamically
document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const usernameSpan = document.getElementById("username");

  nameInput.addEventListener("input", () => {
    usernameSpan.textContent = nameInput.value || "Guest";
  });

  // Form Validation
  const form = document.getElementById("contactForm");
  const result = document.getElementById("formResult");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("messageBox").value.trim();

    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields!");
      return;
    }

    if (!/^[0-9]+$/.test(phone)) {
      alert("Phone number must be numeric!");
      return;
    }

    result.innerHTML = `
      <strong>Name:</strong> ${name} <br>
      <strong>Email:</strong> ${email} <br>
      <strong>Phone:</strong> ${phone} <br>
      <strong>Message:</strong> ${message}
    `;
    form.reset();
    usernameSpan.textContent = "Guest";
  });
});
