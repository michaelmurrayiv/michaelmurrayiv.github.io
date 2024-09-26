
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

// send email confirmation here


    form.reset();
    responseMessage.style.display = "block"; // success message
  });
});
