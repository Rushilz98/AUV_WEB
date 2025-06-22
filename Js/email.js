

// Initialize EmailJS with your public key
(function () {
    emailjs.init("Sl4ka69Apgtsk9DLQ"); // Replace with your actual EmailJS Public Key
})();

// Handle Form Submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form values
    const name = document.getElementById("name").value.trim();
    const company = document.getElementById("company").value.trim();
    const message = document.getElementById("message").value.trim();

    // Collect checked services
    const services = [];
    document.querySelectorAll('#services input[type="checkbox"]:checked').forEach((checkbox) => {
        services.push(checkbox.value);
    });

    const time = new Date().toLocaleString(); // Timestamp of submission

    // Prepare template parameters for EmailJS
    const templateParams = {
        name: name,
        company: company,
        message: message,
        services: services.length > 0 ? services.join(", ") : "None selected",
        time: time
    };

    // Send email
    emailjs.send("service_40yoqac", "template_w2jf56a", templateParams)
        .then(function () {
            const successAlert = document.getElementById("successAlert");
            successAlert.style.display = "block";
            setTimeout(() => {
                successAlert.style.display = "none";
            }, 3000);
            document.getElementById("contact-form").reset();
        }, function (error) {
            alert("Oops! Something went wrong. Please try again.");
            console.log("FAILED...", error);
        });
});