document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const responseDiv = document.getElementById("response");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Simulate sending the form data to the server (you'd typically send this to a server using AJAX or fetch)
        setTimeout(function () {
            responseDiv.innerHTML = "Message sent successfully!";
            contactForm.reset();
        }, 1000); // Simulate a 1-second delay

    });
});
