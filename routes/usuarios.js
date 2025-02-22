// Rutas para consumir el modulo usuarios de Servicio Ecommerce
const express = require("express");
const router = express.Router();

/* const { router } = require("express"); */

// Instanciamos el controlador correspondiente
const usuarioCtr = require("../controllers/usuarios");

// Rutas que entregara el modulo usuario
router.post("/usuario/registro", usuarioCtr.registro);
router.get("/usuario/login", usuarioCtr.login);

router.get("/usuario/listartodos", usuarioCtr.listarTodos);
router.post("/usuario/nuevo", usuarioCtr.nuevo);
router.get("/usuario/buscarporid/:id", usuarioCtr.buscarPorId);
router.put("/usuario/actualizarporid/:id", usuarioCtr.actualizarPorId);
router.delete("/usuario/borrarporid/:id", usuarioCtr.borrarPorId);

module.exports = router;
