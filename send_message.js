
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

//TODO: Send form data to my email, and confirmation to user's email


    form.reset();
    responseMessage.style.display = "block"; // success message
  });
});
