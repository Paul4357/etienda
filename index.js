// Librerias base
const express = require("express");
const app = express();
const cors = require("cors");

// Middleware de la app
app.use(cors());
app.use(express.json());

// Instanciamos la libreria de conexion
const conexion = require("./models/bd_conexion");
conexion();

// Rutas globales
const productoRta = require("./routes/productos");

// Usamos las rutas
app.use("/api", productoRta);

app.listen(4000, () => {
  console.log(`Listen en el puerto ${4000}`);
});
