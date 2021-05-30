// No funciona el import en express ssin uan isntalacion de terceros
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./database/config");

// Crear ell servidor de express
const app = express();

// CORS
app.use(cors());

// Directorio publico
// Lo mas probable es que necesite cambiar esto usando path
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

// TODO: CRUD: Eventos

// Escuchar peticiones
app.listen(process.env.PORT, async () => {
	await dbConnection();
	console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
