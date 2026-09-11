// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});


// Close mobile menu after clicking a link
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});


// WhatsApp enquiry form
const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value;
  const message = document.getElementById("message").value.trim();

  const whatsappNumber = "9779855047889";

  const text =
    Hello Everest Abroad Study!%0A%0A +
    Name: ${name}%0A +
    Phone: ${phone}%0A +
    Interested Level: ${course}%0A +
    Message: ${message || "I would like to know more about the course."};

  window.open(
    https://wa.me/${whatsappNumber}?text=${text},
    "_blank"
  );
});


// Current year
document.getElementById("year").textContent = new Date().getFullYear();