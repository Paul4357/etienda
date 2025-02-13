// Rutas para consumir el modulo usuarios de Servicio Ecommerce
const express = require("express");
const router = express.Router();

/* const { router } = require("express"); */

// Instanciamos el controlador correspondiente
const usuarioCtr = require("../controllers/usuarios");

// Rutas que entregara el modulo usuario
router.get("/usuario/listartodos", usuarioCtr.listarTodos);

module.exports = router;
