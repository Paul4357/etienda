// Rutas para consumir el modulo productos de Servicio Ecommerce
const express = require("express");
const router = express.Router();

/* const { router } = require("express"); */

// Instanciamos el controlador correspondiente
const productoCtr = require("../controllers/productos");

// Rutas que entregara el modulo producto
router.get("/producto/listartodos", productoCtr.listarTodos);
//...

module.exports = router;
