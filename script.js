// ========================================
// EVEREST ABROAD STUDY - MAIN JAVASCRIPT
// ========================================


// ========================================
// MOBILE MENU
// ========================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

        menuBtn.setAttribute(
            "aria-expanded",
            nav.classList.contains("active") ? "true" : "false"
        );

    });

}


// Close mobile menu after clicking a link

document.querySelectorAll(".nav a").forEach((link) => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("active");
        }

        if (menuBtn) {
            menuBtn.setAttribute("aria-expanded", "false");
        }

    });

});



// ========================================
// WHATSAPP COURSE ENQUIRY
// ========================================

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function(event) {

        event.preventDefault();


        // Get form values

        const name =
            document.getElementById("name")?.value.trim() || "";

        const phone =
            document.getElementById("phone")?.value.trim() || "";

        const course =
            document.getElementById("course")?.value || "";

        const message =
            document.getElementById("message")?.value.trim() ||
            "I would like to know more about the course.";


        // ========================================
        // WHATSAPP NUMBER
        // ========================================

        const whatsappNumber = "9779701233408";


        // ========================================
        // WHATSAPP MESSAGE
        // ========================================

        const text =
            `Hello Everest Abroad Study!\n\n` +
            `Name: ${name}\n` +
            `Phone: ${phone}\n` +
            `Interested Level: ${course}\n` +
            `Message: ${message}`;


        // Encode message correctly

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;


        // Open WhatsApp

        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    });

}



// ========================================
// CURRENT YEAR
// ========================================

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}// ========================================
// EVEREST ABROAD STUDY - MAIN JAVASCRIPT
// ========================================


// ========================================
// MOBILE MENU
// ========================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

        menuBtn.setAttribute(
            "aria-expanded",
            nav.classList.contains("active") ? "true" : "false"
        );

    });

}


// Close mobile menu after clicking a link

document.querySelectorAll(".nav a").forEach((link) => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("active");
        }

        if (menuBtn) {
            menuBtn.setAttribute("aria-expanded", "false");
        }

    });

});



// ========================================
// WHATSAPP COURSE ENQUIRY
// ========================================

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function(event) {

        event.preventDefault();


        // Get form values

        const name =
            document.getElementById("name")?.value.trim() || "";

        const phone =
            document.getElementById("phone")?.value.trim() || "";

        const course =
            document.getElementById("course")?.value || "";

        const message =
            document.getElementById("message")?.value.trim() ||
            "I would like to know more about the course.";


        // ========================================
        // WHATSAPP NUMBER
        // ========================================

        const whatsappNumber = "9779701233408";


        // ========================================
        // WHATSAPP MESSAGE
        // ========================================

        const text =
            `Hello Everest Abroad Study!\n\n` +
            `Name: ${name}\n` +
            `Phone: ${phone}\n` +
            `Interested Level: ${course}\n` +
            `Message: ${message}`;


        // Encode message correctly

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;


        // Open WhatsApp

        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    });

}



// ========================================
// CURRENT YEAR
// ========================================

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

};