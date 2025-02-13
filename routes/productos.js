// Rutas para consumir el modulo productos de Servicio Ecommerce
const express = require("express");
const router = express.Router();

/* const { router } = require("express"); */

// Instanciamos el controlador correspondiente
const productoCtr = require("../controllers/productos");

// Rutas que entregara el modulo producto
router.get("/producto/listartodos", productoCtr.listarTodos);
router.post("/producto/nuevo", productoCtr.nuevo);
router.get("/producto/buscarporid/:id", productoCtr.buscarPorId);
router.put("/producto/actualizarporid/:id", productoCtr.actualizarPorId);
router.delete("/producto/borrarporid/:id", productoCtr.borrarPorId);

module.exports = router;
