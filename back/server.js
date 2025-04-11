const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Permitir solicitudes desde el frontend

// Configurar el transporte de correo
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Ruta para recibir los datos y enviar el correo
app.post("/send-email", async (req, res) => {
  const { email } = req.body;

  try {
    await transporter.sendMail({
      from: "tjohana926@gmail.com",
      to: "tjohana926@gmail.com", // Tu correo donde recibirás el email
      subject: "Nuevo Contacto",
      text: `Nuevo mensaje de contacto desde: ${email}`,
    });

    await transporter.sendMail({
      from: "tjohana926@gmail.com",
      to: email, // Responder al usuario
      subject: "Gracias por Contactarnos",
      text: "Gracias por escribirnos. Nos pondremos en contacto contigo pronto.",
    });

    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    res.status(500).json({ error: "Error al enviar el correo" });
  }
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () =>
  console.log("Servidor corriendo en http://localhost:8080")
);
