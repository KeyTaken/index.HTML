document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("TON_PUBLIC_KEY"); // Mets ta clé API EmailJS ici

  document
    .querySelector("#contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      let email = document.querySelector("#email").value;
      let message = document.querySelector("#message").value;

      if (email.trim() === "" || message.trim() === "") {
        alert("Veuillez remplir tous les champs !");
        return;
      }

      emailjs
        .send("TON_SERVICE_ID", "TON_TEMPLATE_ID", {
          user_email: email,
          message: message,
        })
        .then(
          () => {
            alert("Message envoyé !");
            document.querySelector("#contact-form").reset();
          },
          (error) => {
            alert("Erreur : " + error);
          }
        );
    });
});
