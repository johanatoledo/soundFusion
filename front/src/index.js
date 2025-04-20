document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const textHeader = document.getElementById("contact-title");

  const datos = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
    address: document.getElementById("address"),
    subject: document.getElementById("subject"),
    message: document.getElementById("message"),
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(
      Object.entries(datos).map(([key, input]) => [key, input.value.trim()])
    );

    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok) {
        form.innerHTML = "";
        textHeader.textContent =
          "Thank you for contacting us,We will contact you soon.!";
      } else {
        alert("Something went wrong: " + result.message);
      }
    } catch (error) {
      console.error("Error sending form:", error);
      alert("There was an error sending the form.");
    }
  });
});
