// ================================
// EVEREST ABROAD STUDY
// ================================

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
}


// CLOSE MOBILE MENU
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (nav) {
            nav.classList.remove("active");
        }
    });
});


// ================================
// WHATSAPP COURSE ENQUIRY
// ================================

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get form information
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const course = document.getElementById("course").value;
        const message = document.getElementById("message").value.trim();

        // Check required information
        if (name === "" || phone === "" || course === "") {
            alert("Please fill in your name, phone number and course.");
            return;
        }

        // YOUR NEW WHATSAPP NUMBER
        const whatsappNumber = "9779701233408";

        // Message
        const whatsappMessage =
            "Hello Everest Abroad Study!" +
            "\n\n" +
            "Name: " + name +
            "\nPhone: " + phone +
            "\nInterested Level: " + course +
            "\nMessage: " +
            (message || "I would like to know more about the course.");

        // Create WhatsApp URL
        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        // Open WhatsApp
        window.location.href = whatsappURL;

    });

}


// ================================
// CURRENT YEAR
// ================================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}