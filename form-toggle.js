document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("main-content");
    const contactForm = document.getElementById("contact-form");
    const emailBtn = document.getElementById("email-btn");
    const closeBtn = document.getElementById("close-btn");
    const form = document.getElementById("emailForm");

    emailBtn.addEventListener("click", () => {
        mainContent.style.display = "none";
        contactForm.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        contactForm.style.display = "none";
        mainContent.style.display = "grid";
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const userName = encodeURIComponent(document.getElementById("name-input").value);
        const subjectTopic = encodeURIComponent(document.getElementById("subject-input").value);
        const message = encodeURIComponent(document.getElementById("message-input").value);

        const subject = `Message%20from%20${userName}%20-%20${subjectTopic}`;
        const body = `${message}`;

        const mailtoLink = `mailto:fda.et.official@gmail.com?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
    });
});