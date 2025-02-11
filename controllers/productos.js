// Controlador para el manejo de los productos

// Conectamos el controlador con su modelo correspondiente

let producto = require("../models/productos");

// CRUD tipico :: Listar todos, por ID, crear, actualizar, borrar, etc.
const listarTodos = async (req, res) => {
  try {
    // Consultar todos
    let listarProductos = await producto.find().exec();
    res.status(200).send({
      exito: true,
      listarProductos,
    });
  } catch (error) {
    res.status(500).send({
      exito: false,
      mensaje: "Error en la consulta",
    });
  }
};

module.exports = {
  listarTodos,
};
