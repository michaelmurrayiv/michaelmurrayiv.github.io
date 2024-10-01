
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const responseMessage = document.getElementById("form-response");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    // Capture form data
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Send form data to emailjs
    emailjs
      .send("service_michaels_website", "template_muguowi", {
        from_name: name,
        reply_to: email,
        message: message,
      })
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          form.reset();
          responseMessage.style.display = "block"; // success
        },
        function (error) {
          console.error("FAILED...", error);
        }
      );    

    form.reset();
    responseMessage.style.display = "block"; // success message
  });
});
