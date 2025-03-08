// Configuración profesional con dotenv-safe
require("dotenv-safe").config({
  allowEmptyValues: false, // No permite valores vacíos
  example: ".env.example", // Archivo de ejemplo obligatorio
});

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());

const port = process.env.PORT || 1234;
const secretKey = process.env.SECRET_KEY;

app.get("/", (req, res) => {
  res.json({ message: "Servidor funcionando 🚀", env: process.env.NODE_ENV });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Archivo .env.example (No se sube al servidor)
// PORT=3000
// NODE_ENV=development
// SECRET_KEY=tu_secreto
