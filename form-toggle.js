document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("main-content");
    const contactForm = document.getElementById("contact-form");
    const emailBtn = document.getElementById("email-btn");
    const closeBtn = document.getElementById("close-btn");

    emailBtn.addEventListener("click", () => {
        mainContent.style.display = "none";
        contactForm.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        contactForm.style.display = "none";
        mainContent.style.display = "grid";
    });
});